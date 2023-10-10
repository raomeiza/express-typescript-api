import mongoose, { Schema, Document } from "mongoose";
import { IUserPayload } from "../../interface/user";

const UserSchema: Schema = new Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String },
  lastName: { type: String },
});

export default mongoose.model<IUserPayload>("User", UserSchema);