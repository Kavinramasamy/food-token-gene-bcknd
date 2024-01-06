import bcrypt from "bcrypt";

const decrypt = async (password, hashedPassword) => {
  return await bcrypt.compare(password, hashedPassword);
};
export default decrypt;
