import express from "express";
import { AdminModel } from "../../models/admin_model.js";
import encrypt from "../../helper/encryption.js";

const AdminSignUp = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Check Admin is present or not
    const admin = await AdminModel.findOne({ email });

    // Admin already exists
    if (admin) {
      return res.status(409).json({ message: "Admin Already Exists" });
    }

    // Password Encryption
    const hashedPassword = await encrypt(password);

    // Adding new Admin
    const new_admin = await AdminModel({
      email,
      password: hashedPassword,
    }).save();

    return res.status(201).json({ message: "SignUp Success", new_admin });
  }
  catch (error) {
    return res.status(500).json({ message: "Internal Server Error" });
  }

};
export default AdminSignUp;
