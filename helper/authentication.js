import jwt from "jsonwebtoken";
import "dotenv/config.js";

const Auth = async (req, res, next) => {
  try {
    // Getting Token from the headers
    const token = req.headers["x-auth-token"];
    // Check - Token present or not
    if (!token) {
      return res
        .status(401)
        .json({ message: "Unauthorized: No token provided" });
    }
    // Token verification
    const key = process.env.KEY;

    const decode = jwt.verify(token, key);
    console.log(decode);
    if (!decode) {
      return res.status(401).json({ message: "Unauthorized: Invalid token" });
    }
    next();
  } catch (error) {
    await res.status(500).json({ Error: "Internal Server Error", error });
  }
};

export default Auth;
