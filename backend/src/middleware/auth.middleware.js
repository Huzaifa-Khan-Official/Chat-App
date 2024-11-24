import jwt from "jsonwebtoken";
import User from "../models/user.model.js";
import serverConfig from "../config/serverConfig.js";

export const protectRoute = async (req, res, next) => {
    try {
        const token = req.cookies.jwt;        

        if (!token) {
            return res.status(401).json({
                message: "Not authorized - No Token Provided"
            });
        }

        const decoded = jwt.verify(token, serverConfig.JWT_SECRET_KEY);

        if (!decoded) {
            return res.status(401).json({
                message: "Not authorized - Invalid Token"
            });
        }

        const user = await User.findById(decoded.userId).select("-password");

        if (!user) {
            return res.status(404).json({
                message: "User not found"
            });
        }

        req.user = user;
        next();
    } catch (error) {
        console.log("Error in protectRoute middleware", error.message);
        res.status(500).json({
            message: "Internal Server Error"
        });
    }
}