import dotenv from "dotenv";

dotenv.config({ path: ".env.production" })

const serverConfig = {
    PORT: process.env.PORT,
    dbURI: process.env.MONGODB_URI,
    JWT_SECRET_KEY: process.env.JWT_SECRET_KEY,
    NODE_ENV: process.env.NODE_ENV,
    CLOUDINARY_CLOUD_NAME: process.env.CLOUDINARY_CLOUD_NAME,
    CLOUDINARY_API_KEY: process.env.CLOUDINARY_API_KEY,
    CLOUDINARY_API_SECRET: process.env.CLOUDINARY_API_SECRET
}

export default serverConfig;