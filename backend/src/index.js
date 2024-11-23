import express from "express";
import authRoutes from "./routes/auth.route.js";
import serverConfig from "./config/serverConfig.js";
import { connectDB } from "./lib/db.js";
import cookieParser from "cookie-parser";

const app = express();

const PORT = serverConfig.PORT;

app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRoutes);

app.listen(PORT, () => {
    console.log("Server listening on, ", PORT);
    connectDB();
})