import mongoose from "mongoose";

const food_schema = mongoose.Schema({
  food_name: {
    type: String,
    required: true,
  },
  veg: {
    type: Boolean,
    required: true,
    default: true,
  },
  price: {
    type: Number,
    required: true,
  },
  cooking_time: {
    type: String,
    required: true,
  },
  cuisine: {
    type: String,
    required: true,
  },
  image_url: {
    type: String,
    required: true,
  }
});

export const FoodModel = mongoose.model("foods", food_schema);
