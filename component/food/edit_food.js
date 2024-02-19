import { FoodModel } from "../../models/food_model.js";

const EditNewFood = async (req, res) => {
  try {
    const { _id, food_name, veg, price, cooking_time, cuisine, image_url } =
      req.body;
    const food = await FoodModel.findOne({ _id });
    if (!food) {
      return res.status(401).json({ message: "No dish present" });
    }
    await FoodModel.updateOne(
      { _id },
      { food_name, veg, price, cooking_time, cuisine, image_url }

    )
      .then(resp => { res.status(200).json({ message: "Updated Successfully", resp }); })

      .catch(error => {
        console.log("myerror", error);
        return res.status(400).json({ message: "Updated Failed", error });
      })

  } catch (error) {
    res.status(500).json({ message: "Internal Server Error", error });
  }
};
export default EditNewFood;
