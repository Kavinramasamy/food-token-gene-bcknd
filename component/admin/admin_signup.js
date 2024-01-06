import express from "express";
import { AdminModel } from "../../models/admin_model.js";
import encrypt from "../../helper/encryption.js";

const AdminSignUp = async (req, res) => {
  try {
    const { admin_name, email, password } = req.body;
    const admin = await AdminModel.findOne({ email });
    if (admin) {
      return res.status(401).json({ message: "User already exist" });
    }
    const encrypted_password = await encrypt(password);
    const new_admin = await AdminModel({
      email,
      admin_name,
      password: encrypted_password,
    });
    res.status(200).json({ message: "SignUp Success!", new_admin });
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
};
export default AdminSignUp;
