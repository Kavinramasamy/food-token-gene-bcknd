import mongoose from "mongoose";

const OrderSchema = await mongoose.Schema({
    food_id: {
        type: String,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    },
    order_time: {
        type: Number,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    image_url: {
        type: String,
        required: true
    },
    duration: {
        type: Number,
        required: true
    },
    status: {
        type: Boolean,
        required: true
    },
    table_no: {
        type: Number,
        required: true
    },
    mobile_no: {
        type: Number,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },

})

export const orderModel = mongoose.model("order", OrderSchema);