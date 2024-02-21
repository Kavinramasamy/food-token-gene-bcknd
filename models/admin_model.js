import mongoose from "mongoose";

const admin_schema = mongoose.Schema({

  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

export const AdminModel = mongoose.model("admins", admin_schema);
