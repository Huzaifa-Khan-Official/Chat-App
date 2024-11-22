import express from "express";
import authRoutes from "./routes/auth.route.js";
import serverConfig from "./config/serverConfig.js";
import { connectDB } from "./lib/db.js";

const app = express();

const PORT = serverConfig.PORT;

app.use("/api/auth", authRoutes);

app.listen(PORT, () => {
    console.log("Server listening on, ", PORT);
    connectDB(); 
})