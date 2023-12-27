import { generateToken } from "../Helpers/Generatorjwt.js"
import { passwordComparing } from "../helpers/Hashing.js"
import { AdminModel } from "../models/adminmodel.js"

export const login = async (req, res) => {
    try {
        const exuser = await AdminModel.findOne({ email: req.body.email })
        if (!exuser) {
            res.status(403).json({ message: "Invalid credential...." })
        }
        const verification = await passwordComparing(req.body.password, exuser.password)
        if (!verification) {
            return res.status(403).json({ message: "Inavalid credential unable to login...." })
        }

        const status = exuser.status
        if (status === "inactive") {
            return res.status(400).json({
                message: "please activate your account.....check your mail for activation link "
            })
        }
        const token = await generateToken(req.body.email);
        res.status(200).json({ message: "login success....", token, email: exuser.email })

    }
    catch (error) {
        res.status(500).json({ message: "unable to login.....", error })
    }
}