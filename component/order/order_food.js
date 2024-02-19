import generate_food_token from "../../helper/food_token.js";
import { OrderModel } from "../../models/order_model.js";
import nodemailer from 'nodemailer';
import "dotenv/config.js";


const AddNewFoodOrder = async (req, res) => {
  try {
    const { order_id, table_number, phone_number, email, user_name, price } = req.body;
    let token_number;

    while (true) {

      let temp = await generate_food_token();
      const token = await OrderModel.findOne({ token_number: temp });
      if (!token) {
        token_number = temp
        break;
      }
    }
    //new order
    const new_order = await OrderModel(
      {
        token_number,
        order_id,
        table_number,
        phone_number,
        email,
        user_name,
        price
      }
    ).save();

    let transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.USER,
        pass: process.env.PASS
      }
    })
    //Message for mail
    let message = {
      from: process.env.USER,
      to: 'kavinramasamymech@gmail.com',
      subject: "Food token generator ",
      html: `<h1>Food Order Token</h1>
      <h3>${token_number}</h2>
      <h3><i>Your order is on the way...!</i></h3>`,


    }
    let sendMail = await transporter.sendMail(message);

    res
      .status(200)
      .json({ message: "New Food Order Added Successfully", new_order });
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error", error });
  }
};
export default AddNewFoodOrder;
