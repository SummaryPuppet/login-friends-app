import brcypt from "bcryptjs";
import { Router } from "express";
import UserModel from "../models/User";
import jwt from "jsonwebtoken";
import { SECRET_TOKEN_JWT } from "../config";
import friendsSearch from "../utils/friendSearch";

const router = Router();

router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  const user = await UserModel.findOne({ email });

  const passwordCorrect =
    user === null ? false : await brcypt.compare(password, user.password);

  if (!(passwordCorrect && user)) {
    return res.status(401).json({ error: "invalid user or password" });
  }

  const userForToken = {
    id: user!._id,
    firstname: user!.firstname!,
    lastname: user!.lastname!,
    nickname: user!.nickname,
    email: user!.email,
  };

  const token = jwt.sign(userForToken, SECRET_TOKEN_JWT, {
    expiresIn: 60 * 60 * 24 * 7,
  });

  const friends = await friendsSearch(user._id.toString())

  res.json({
    firstname: user!.firstname,
    lastname: user!.lastname!,
    email: user!.email,
    nickname: user!.nickname,
    friends,
    token,
  });
});

export default router;
