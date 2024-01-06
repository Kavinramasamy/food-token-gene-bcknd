import { FoodModel } from "../../models/food_model.js";

const EditNewFood = async (req, res) => {
  try {
    const { _id, food_name, veg, price, cooking_time, cuisine, image_url } =
      req.body;
    const food = await FoodModel.findOne({ _id });
    if (!food) {
      return res.status(401).json({ message: "No dish present" });
    }
    await FoodModelupdateOne(
      { _id },
      { _id, food_name, veg, price, cooking_time, cuisine, image_url },
      (err, data) => {
        if (err) {
          return res.status(401).json({ message: "Update Failed" });
        } else {
          return res.status(201).json({ message: "Update success", data });
        }
      }
    );
    res.status(200).json({ message: "Updated Successfully", new_food });
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
};
export default EditNewFood;
