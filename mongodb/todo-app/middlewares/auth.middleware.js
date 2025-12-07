import jwt from "jsonwebtoken";
import {secret} from "../index.js";

const authMiddleware = (req, res, next) => {
    const token = req.headers.token;

    const decoded = jwt.verify(token, secret);

    if (decoded) {
        req.userId = decoded.id;
        next();
    } else {
        res.status(403).json({
            message: "Incorrect credentials",
        })
    }
}

export default authMiddleware;