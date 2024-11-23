import dotenv from "dotenv";

dotenv.config({ path: ".env.production" })

const serverConfig = {
    PORT: process.env.PORT,
    dbURI: process.env.MONGODB_URI,
    JWT_SECRET_KEY: process.env.JWT_SECRET_KEY,
    NODE_ENV: process.env.NODE_ENV
}

export default serverConfig;