import { OrderModel } from "../../models/order_model.js";

const EditFoodOrder = async (req, res) => {
  try {
    const { order_id, status } = req.body;
    const order = await OrderModel.findOne({
      order_id,
    });
    if (!order) {
      return res.status(401).json({ message: "No orders found" });
    }
    const edited_order = await OrderModel.updateOne(
      {
        username: req.body.user,
      },
      {
        $set: {
          token_number,
          table_number,
        },
      }
    );
    res
      .status(200)
      .json({ message: "Food Order Edited Successfully", edited_order });
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
};
export default EditFoodOrder;
