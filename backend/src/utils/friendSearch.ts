import UserModel from "../models/User";
import { Friend } from "../types.d";

async function friendsSearch(userId: string) {
  const user = await UserModel.findById(userId);
  let friends: Friend[] = [];

  if (user!.friends.length === 0) return friends;

  for (const friend of user!.friends){
    const f = await UserModel.findById(friend)
    friends.push({
      firstname: f!.firstname,
      lastname: f!.lastname,
      nickname: f!.nickname,
    })
  }

  return friends;
}

export default friendsSearch;
