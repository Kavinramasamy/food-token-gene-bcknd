import mongoose from "mongoose";

const CombofoodSchema = await mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    Veg: {
        type: Array,
        required: true
    },
    non_veg: {
        type: Array,
        require: true
    },
    price: {
        type: Number,
        required: true
    },
    preparation_time: {
        type: Number,
        required: true
    },
    image_url: {
        type: String,
        required: true
    },
    avaliablity: {
        type: Boolean,
        required: true
    }
})
export const CombofoodModel = mongoose.model("combofoods", CombofoodSchema);