import mongoose from "mongoose";
import { model, Schema } from "mongoose";
const UserSchema = new Schema({
    email: { type: String, unique: true },
    username: { type: String },
    password: { type: String }
});
export const UserModel = model("Users", UserSchema);
//# sourceMappingURL=db.js.map