import generate_food_token from "../../helper/food_token.js";
import { OrderModel } from "../../models/order_model.js";
import { UserModel } from "../../models/user_model.js";

const AddNewFoodOrder = async (req, res) => {
  try {
    const { order_id, table_number, phone_number, email, user_name } = req.body;
    const token_number = await generate_food_token();
    const new_user = await UserModel.findOne({
      phone_number,
    });
    if (!new_user) {
      await UserModel(user_name, email, phone_number).save();
    }
    const new_order = await OrderModel(
      token_number,
      order_id,
      table_number
    ).save();
    res
      .status(200)
      .json({ message: "New Food Order Added Successfully", new_order });
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
};
export default AddNewFoodOrder;
