import jwt from "jsonwebtoken";
import "dotenv/config.js";

const generate_token = async (email) => {
  const key = process.env.KEY;

  return jwt.sign({ email }, key, { expiresIn: "1d" });
};

export default generate_token;
