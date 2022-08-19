import mongoose from "mongoose";
import { MONGO_DB_URI } from "./config";


mongoose
  .connect(MONGO_DB_URI, {})
  .then(() => console.log("DB is connected"))
  .catch((error) => console.error(error));
