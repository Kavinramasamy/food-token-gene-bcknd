import { db_connection } from "./dataBase/db.js";
import express from 'express';
import 'dotenv/config.js';
import cors from 'cors';
import { RouterPage } from "./Routers/RouterPage.js"

const app = express();

db_connection()

app.use(cors({ origin: "*" }));
app.use(express.json());

app.use('/', async (req, res) => res.status(200).json({ message: "working" }));
// app.use('/', RouterPage);

app.listen(process.env.PORT, () => console.log("server listen at port", process.env.PORT));