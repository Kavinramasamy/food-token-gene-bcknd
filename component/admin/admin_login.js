import express from "express";
import decrypt from "../../helper/decryption.js";
import { AdminModel } from "../../models/admin_model.js";
import jwt from "jsonwebtoken";


const AdminLogin = async (req, res) => {
  try {
    const generate_token = async (email) => {
      const key = process.env.KEY;

      return await jwt.sign({ id: email }, key, { expiresIn: "1d" });
    };
    const { email, password } = req.body;

    // Check Admin is present or not
    const admin = await AdminModel.findOne({ email });

    // Admin already exists
    if (!admin) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    // Password Decryption
    const pass = await decrypt(password, admin.password);

    // Password Validation
    if (!pass) {
      return res.status(401).json({ message: "Unauthorized" });
    }
    const token = await generate_token(email);
    return res.status(201).json({ message: "Login Success", token });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Internal Server Error", error });
  }

};
export default AdminLogin;
