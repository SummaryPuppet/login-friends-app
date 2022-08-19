import { Router } from "express";
import UserModel from "../models/User";

const router = Router();

router.post("/signin", async(req, res) => {
  const newUser = new UserModel(req.body);
  await newUser.encriptPassword(newUser.password);
  await newUser.save();

  res.json({
    success: true,
    user: {
      firstname: newUser.firstname,
      lastname: newUser.lastname,
      email: newUser.email,
      nickname: newUser.nickname,
      friends: []
    },
  });
});

export default router;
