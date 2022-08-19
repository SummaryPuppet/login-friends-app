import passport from "passport";
import UserModel from "../models/User";

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser(async (id, done) => {
  const user = await UserModel.findById(id);
  if (user) done(null, user);
});


