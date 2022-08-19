import express from "express"
import cors from "cors"

import "./db"

import { NODE_ENV } from "./config"
import handleError from "./middlewares/handleErrors"
import userRoute from "./routes/user.route"
import loginRoute from "./routes/login.route"
import signinRoute from "./routes/signin.routes"

const app = express()

app.use(express.json())
app.use(cors())

if (NODE_ENV === "production"){
  app.use(express.static("../../frontend/dist"))
}

// Routes
app.use("/api/usr", userRoute)
app.use("/", loginRoute)
app.use("/", signinRoute)

app.use(handleError)

export default app
