import mongoose from "mongoose";

const order_schema = mongoose.Schema({
  token_number: {
    type: String,
    required: true,
    unique: true,
  },
  order_id: {
    type: String,
    required: true,
  },
  table_number: {
    type: Number,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
});

export const OrderModel = mongoose.model("orders", order_schema);
