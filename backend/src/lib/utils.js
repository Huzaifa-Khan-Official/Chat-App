import jwt from "jsonwebtoken"
import serverConfig from "../config/serverConfig.js"


export const generateToken = (userId, res) => {
    const token = jwt.sign({ userId }, serverConfig.JWT_SECRET_KEY, {
        expiresIn: "7d"
    });

    res.cookie("jwt", token, {
        maxAge: 7 * 24 * 60 * 60 * 1000,
        httpOnly: true,
        sameSite: "strict",
        secure: serverConfig.NODE_ENV !== "development"
    });

    return token;
}