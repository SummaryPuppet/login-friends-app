import UserModel from "../models/User";
import { User } from "../models/User";

export async function searchAllUsers(){
  const users = await UserModel.find()

  return users
}

export async function searchUser(usr: User) {
  const user = await UserModel.findOne(usr);

  return user;
};

export async function createUser (user: User) {
  const newUser = new UserModel(user);
  
  await newUser.encriptPassword(newUser.password)
  await newUser.save()

  return newUser;
};

export async function deleteUser (id: string) {
  const userDeleted = await UserModel.findByIdAndDelete(id);

  return userDeleted;
};

export async function newFriend (userId: string ,newFriend: User) {
  const friend = await searchUser(newFriend);
  if (!friend) return { done: false };


  return friend;
};
