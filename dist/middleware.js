import jwt from "jsonwebtoken";
import * as dotenv from 'dotenv';
dotenv.config();
const JWT_SECRET = process.env.JWT_SECRET;
export const auth = (req, res, next) => {
    const token = req.headers.authorization;
    if (token) {
        const decoded = jwt.verify(token, JWT_SECRET);
        if (decoded) {
            //@ts-ignore
            req.user = decoded;
            console.log(decoded);
            next();
        }
        else {
            res.json({ message: "Invalid Token" });
        }
    }
    else {
        res.json({ message: "You are not logged in" });
    }
};
//# sourceMappingURL=middleware.js.map