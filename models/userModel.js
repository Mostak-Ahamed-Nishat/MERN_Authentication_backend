import mongoose from "mongoose";

const userSchema = mongoose.Schema(
  {
    name: {
      name: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model(userSchema);
export default User;
