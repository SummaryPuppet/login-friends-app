import app from "./app";
import { PORT } from "./config"


export const server = app.listen(PORT)
console.log(`Server on port: ${PORT}`)
