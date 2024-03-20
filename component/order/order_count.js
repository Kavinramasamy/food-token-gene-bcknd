import { OrderModel } from "../../models/order_model.js";

const OrderCount = async (req, res) => {
    try {
        const orders = await OrderModel.find();

        res.status(201).json({ message: "Order count", count: orders.length || 0 });
    } catch (error) {
        res.status(500).json({ message: "Internal Server Error" });
    }
};
export default OrderCount;