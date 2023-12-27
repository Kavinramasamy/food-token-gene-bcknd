import nodemailer from 'nodemailer';
import { AdminModel } from '../models/adminmodel.js';
import { passwordHashing } from '../helpers/Hashing.js';
import 'dotenv/config.js'

export const signup = async (req, res) => {
    try {
        const User = await AdminModel.findOne({ email: req.body.email })

        if (User) {
            return res.status(403).json({ message: "user already exist" })
        }
        const hashedPassword = await passwordHashing(req.body.password)
        let transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.USER,
                pass: process.env.PASS
            }
        })
        let message = {
            from: process.env.USER,
            to: req.body.email,
            subject: "FOOD TOKEN GENERATOR ACTIVATION LINK",
            html: " <p>click the below link to activate your account</p>"
        }
        let sendMail = await transporter.sendMail(message).then((res) => console.log("Mail sent")).catch((err) => { return console.log("Not sent", err) });
        const newUser = await AdminModel({
            username: (req.body.username),
            email: (req.body.email),
            password: (hashedPassword)
        }).save()
        res.status(200).json({ message: "check your mail for activation link ", newUser })
    }
    catch (error) {
        res.status(500).json({ message: "unable to signup...", error })
    }
}