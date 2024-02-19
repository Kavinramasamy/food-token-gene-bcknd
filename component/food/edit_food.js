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
      { food_name, veg, price, cooking_time, cuisine, image_url }


    ).then(res => { res.status(200).json({ mressage: "Updated Successfully" }); })
      .catch(error => { res.status(400).json({ mressage: "Updated Failed", error }); })

  } catch (error) {
    console.log("my error", error)
    res.status(500).json({ message: "Internal Server Error", error });
  }
};
export default EditNewFood;
