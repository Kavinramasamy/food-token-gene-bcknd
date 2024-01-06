import { FoodModel } from "../../models/food_model.js";

const DeleteFood = async (req, res) => {
  try {
    const { id } = req.params;
    if (!id) {
      return res.status(409).json({ message: "ID not given" });
    }
    await FoodModel.deleteOne({
      _id: id,
    });
    res.status(202).json({ message: "Deleted Success" });
  } catch (error) {
    res.status(500).json({ message: "Failed to delete" });
  }
};

export default DeleteFood;
