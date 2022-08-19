import { Router } from "express";
import UserModel from "../models/User";
import userExtractor from "../middlewares/userExtractor";
import { RequestWithUserId } from "../types.d";
import friendsSearch from "../utils/friendSearch"

const router = Router();

router.get("/", userExtractor, async (_req, res) => {
  const users = await UserModel.find();
  res.json({ success: true, usrs: users });
});

router.get("/:nickname", userExtractor, async (req, res) => {
  const user = await UserModel.findOne({ nickname: req.params.nickname });

  res.json({ success: true, user });
});

router.post(
  "/add-friend",
  userExtractor,
  async (req: RequestWithUserId, res) => {
    const { userId } = req;
    const { nickname } = req.body;

    const friend = await UserModel.find({ nickname });

    if (!friend.length)
      return res.json({ success: false, error: "User not find" });

    const user = await UserModel.findOneAndUpdate(
      { _id: userId },
      {
        $push: { friends: [friend[0]._id] },
      }
    );

    let friends = await friendsSearch(userId || "");

    res.json({
      success: true,
      user: {
        firstname: user!.firstname,
        lastname: user!.lastname,
        friends,
        nickname: user!.nickname,
      },
    });
  }
);

export default router;
