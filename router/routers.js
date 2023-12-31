import express from "express";
import WelcomeComp from "../component/welcome/welcome.js";
// import AdminLogin from "../component/admin/admin_login.js";
// import AdminSignUp from "../component/admin/admin_signup.js";
// import AddNewFood from "../component/food/add_new_food.js";
// import FoodList from "../component/food/food_list.js";
// import AddNewFoodOrder from "../component/order/order_food.js";
// import OrderList from "../component/order/order.js";
// import EditFoodOrder from "../component/order/edit_order.js";

const router = express.Router();

// WELCOME
router.get("/", WelcomeComp);

// // ADMIN
// router.post("/login", AdminLogin);
// router.post("/signup", AdminSignUp);

// // FOOD
// router.get("/food", FoodList);
// router.post("/food", AddNewFood);

// // ORDER
// router.get("/order", OrderList);
// router.post("/order", AddNewFoodOrder);
// router.put("/order", EditFoodOrder);

export default router;
