import { db_connection } from "./dataBase/db.js";
import express from 'express';
import { } from 'dotenv/config.js';
import cors from 'cors';
import { RouterPage } from "./Routers/RouterPage.js"

const app = express();

db_connection()

app.use(cors({ origin: "*" }));
app.use(express.json());

app.use('/', RouterPage);

app.listen(process.env.PORT, () => console.log("server listen at port", process.env.PORT));