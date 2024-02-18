import mongoose from "mongoose";

const FoodSchema = await mongoose.Schema({
    image_url: {
        type: String,
        required: true
    },
    dish_name: {
        type: String,
        required: true
    },
    cuisine: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    veg: {
        type: Boolean,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    preparation_time: {
        type: Number,
        required: true
    }

})
export const foodModel = mongoose.model("foods", FoodSchema);
