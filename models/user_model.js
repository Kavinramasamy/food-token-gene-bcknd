import mongoose from "mongoose";

const user_schema = mongoose.Schema({
  user_name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone_number: {
    type: String,
    required: true,
  },
});

export const UserModel = mongoose.model("users", user_schema);
