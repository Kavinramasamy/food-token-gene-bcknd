import bcrypt from "bcrypt";
const encrypt = async (password) => {
  return await bcrypt.hash(password, 10);
};
export default encrypt;
