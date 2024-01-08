import { OrderModel } from "../../models/order_model.js";

const OrderList = async (req, res) => {
  try {
    const order_list = await OrderModel.find();
    if (order_list.length === 0) {
      return res.status(401).json({ message: "No order found" });
    }
    res.status(201).json({ message: "Order list", order_list });
  }
  catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
};
export default OrderList;
