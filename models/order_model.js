import mongoose from "mongoose";

const order_schema = mongoose.Schema({
  phone_number: {
    type: String,
    required: true,

  },
  order_id: {
    type: String,
    required: true,
  },
  table_number: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  token_number: {
    type: String,
    required: true,
    unique: true,
  }

});

export const OrderModel = mongoose.model("orders", order_schema);
