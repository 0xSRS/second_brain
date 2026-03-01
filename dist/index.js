import express from "express";
import mongoose from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { z } from "zod";
import { UserModel } from "./db.js";
import * as dotenv from 'dotenv';
dotenv.config();
const PORT = process.env.PORT || 3000;
const URL = process.env.URL;
const JWT_SECRET = process.env.JWT_SECRET;
const app = express();
app.use(express.json());
const UserCheck = z.object({
    email: z.string().email(),
    username: z.string().min(3, "Username must be at least 3 characters long")
        .max(20, "Username must be at most 20 characters long"),
    password: z.string()
        .min(8, "Password must be at least 8 characters long")
        .max(32, "Password must be at most 32 characters long")
        .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
        .regex(/[a-z]/, "Password must contain at least one lowercase letter")
        .regex(/[0-9]/, "Password must contain at least one number")
        .regex(/[^A-Za-z0-9]/, "Password must contain at least one special character")
});
app.post("/api/v1/signup", async (req, res) => {
    const usercheck = UserCheck.safeParse(req.body);
    if (!usercheck.success)
        res.json({ message: "Incorrect Credenials" });
    const { email, username, password } = req.body;
    const user = await UserModel.findOne({ email });
    if (user) {
        res.json({ message: "User already exists" });
    }
    else {
        const hashedPass = await bcrypt.hash(password, 5);
        await UserModel.create({ email, username, password: hashedPass });
        res.json({ message: "User addded" });
    }
});
app.post("/api/v1/login", async (req, res) => {
    const usercheck = UserCheck.safeParse(req.body);
    if (!usercheck.success)
        res.json({ message: "Incorrect Credenials" });
    const { email, username, password } = req.body;
    const user = await UserModel.findOne({ email });
    if (!user) {
        res.status(401).json({ message: "User not found. You need to signin first" });
    }
    else {
        const result = await bcrypt.compare(password, user.password);
        if (result) {
            const token = jwt.sign({ email }, JWT_SECRET);
            res.json({ token });
        }
        else {
            res.json({ message: "Incorrect Password" });
        }
    }
});
app.post("/api/v1/content", (req, res) => {
});
app.get("/api/v1/content", (req, res) => {
});
app.delete("/api/v1/content", (req, res) => {
});
app.post("/api/v1/brain/share", (req, res) => {
});
app.get("/api/v1/brain/:shareLink", (req, res) => {
});
async function start() {
    try {
        console.log("Starting server...");
        console.log("PORT:", PORT);
        console.log("URL exists:", !!URL);
        await mongoose.connect(URL);
        console.log("MongoDB Connected ✅");
        app.listen(PORT || 3000, () => {
            console.log("Server running ✅");
        });
    }
    catch (err) {
        console.error("START ERROR ❌", err);
    }
}
start();
//# sourceMappingURL=index.js.map