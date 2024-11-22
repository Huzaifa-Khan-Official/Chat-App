import dotenv from "dotenv";

dotenv.config({ path: ".env.production" })

const serverConfig = {
    PORT: process.env.PORT,
    dbURI: process.env.MONGODB_URI
}

export default serverConfig;