import express from "express";
import cors from "cors";
import "dotenv/config.js";
import { db_connection } from "./database/db_connection.js";
import router from "./router/routers.js";

const app = express();

//Middleware
app.use(cors({ origin: "*" }));
app.use(express.json());
db_connection();

//Router
app.use("/", router);

//Server
const PORT = process.env.PORT;
app.listen(PORT, () => console.log("Listening ", PORT));
