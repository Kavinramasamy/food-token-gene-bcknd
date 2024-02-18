import { FoodModel } from "../../models/food_model.js";

const AddNewFood = async (req, res) => {
  try {
    const { food_name, veg, price, cooking_time, cuisine, image_url } =
      req.body;
    const food = await FoodModel.findOne({ food_name });
    if (food) {
      return res.status(401).json({ message: "Dish already present" });
    }
    const new_food = await FoodModel({
      food_name,
      veg,
      price,
      cooking_time,
      cuisine,
      image_url,
    }).save();
    res.status(200).json({ message: "New Food Added Successfully", new_food });
  } catch (error) {
    const data = req.body

    res.status(500).json({ message: "Internal Server Error", data });
  }
};
export default AddNewFood;
