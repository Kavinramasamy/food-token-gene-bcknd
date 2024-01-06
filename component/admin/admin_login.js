import express from "express";
import { AdminModel } from "../../models/admin_model.js";
import decrypt from "../../helper/decryption.js";
import generate_token from "../../helper/generate_token.js";

const AdminLogin = async (req, res) => {
  try {
    const { email, password } = req.body;
    const admin = await AdminModel.findOne({ email });
    if (!admin) {
      return res.status(401).json({ message: "Invalid Credentials" });
    }
    const check_password = await decrypt(password);
    if (!check_password) {
      return res.status(401).json({ message: "Invalid Credentials" });
    }
    const token = await generate_token(email);
    res.status(200).json({ message: "Login Success!", token });
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
};
export default AdminLogin;
