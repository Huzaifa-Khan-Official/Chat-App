import mongoose from "mongoose"; import serverConfig from "../config/serverConfig.js";
;

export const connectDB = async () => {
    try {
        const res = await mongoose.connect(serverConfig.dbURI);
        console.log(`MongoDB connected successfully: ${res.connection.host}`);
    } catch (error) {
        console.log("MongoDB connection error:", error);
    }
}