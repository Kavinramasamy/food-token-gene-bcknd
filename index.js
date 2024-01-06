import express from "express";
import cors from "cors";
import "dotenv/config.js";
import { db_connection } from "./database/db_connection.js";
// import router from "./router/routers.js";
import WelcomeComp from "./component/welcome/welcome.js";

const app = express();

//Middleware
app.use(cors({ origin: "*" }));
app.use(express.json());
db_connection();

//Router
app.get("/", WelcomeComp);
// app.use("/", router);

//Server
const PORT = process.env.PORT;
app.listen(PORT, () => console.log("Listening ", PORT));
