import express from "express";
import authRoutes from "./routes/auth.route.js";
import dotenv from "dotenv";

const app = express();

dotenv.config({path: ".env.production"})
const PORT = process.env.PORT;

app.use("/api/auth", authRoutes);

app.listen(PORT, () => {
    console.log("Server listening on, ", PORT); 
})