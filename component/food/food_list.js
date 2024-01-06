import { FoodModel } from "../../models/food_model.js";

const FoodList = async (req, res) => {
  try {
    const food_list = await FoodModel.find();
    if (food_list.length === 0) {
      return res.status(401).json({ message: "No foods found" });
    }
    res.status(201).json({ message: "Food list", food_list });
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
};
export default FoodList;
