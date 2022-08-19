import "dotenv/config"

export const PORT = process.env.PORT || 3000
export const NODE_ENV = process.env.NODE_ENV || "develoment"

export const MONGO_DB_URI = process.env.MONGO_DB_URI || ""

// Login JWT
export const SECRET_TOKEN_JWT = process.env.SECRET_TOKEN_JWT || "123"

// Passport
export const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID || ""
export const GOOGLE_CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET || ""
