import express from "express";
import serverConfig from "./config/serverConfig.js";
import { connectDB } from "./lib/db.js";
import cookieParser from "cookie-parser";

// Routes Imports
import authRoutes from "./routes/auth.route.js";
import messageRoutes from "./routes/message.route.js";

const app = express();

const PORT = serverConfig.PORT;

app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRoutes);
app.use("/api/message", messageRoutes);

app.listen(PORT, () => {
    console.log("Server listening on, ", PORT);
    connectDB();
})