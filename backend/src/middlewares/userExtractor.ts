import { Response, NextFunction } from "express"
import jwt from "jsonwebtoken"
import { SECRET_TOKEN_JWT } from "../config"
import { JWTPayload } from "../types.d"
import { RequestWithUserId } from "../types"

function userExtractor (req: RequestWithUserId, res: Response, next: NextFunction){
  const authorization = req.get("authorization")
  let token = ""

  if (authorization && authorization.toLowerCase().startsWith('bearer')){
    token = authorization.split(" ")[1]
  }

  const decodedToken = jwt.verify(token, SECRET_TOKEN_JWT) as JWTPayload

  if (!token || !decodedToken){
    return res.status(401).json({error: "token missing or invalid"})
  }
  
  const {id: userId} = decodedToken

  req.userId = userId

  next()
}

export default userExtractor
