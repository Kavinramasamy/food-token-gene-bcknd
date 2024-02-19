import generate_food_token from "../../helper/food_token.js";
import { OrderModel } from "../../models/order_model.js";

const AddNewFoodOrder = async (req, res) => {
  try {
    const { order_id, table_number, phone_number, email, user_name } = req.body;
    let token_number;

    while (true) {

      let temp = await generate_food_token();
      const token = await OrderModel.findOne({ token_number: temp });
      if (!token) {
        token_number = temp
        break;
      }
    }

    const new_order = await OrderModel(
      token_number,
      order_id,
      table_number,
      phone_number,
      email,
      user_name
    ).save();
    res
      .status(200)
      .json({ message: "New Food Order Added Successfully", new_order });
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
};
export default AddNewFoodOrder;
