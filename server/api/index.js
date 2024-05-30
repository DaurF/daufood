import * as dotenv from "dotenv";

dotenv.config();

import express from "express";
import cors from "cors";
import morgan from 'morgan'

import api from "./routes/api.js";
import {mysqlConnect} from "./services/mysql.js";


const app = express();

if (process.env.NODE_ENV !== 'production') {
  app.use(morgan('dev'));
}

app.use(cors());
app.use(express.json());

mysqlConnect()

// Routers
app.use("/api/v1", api);

const PORT = process.env.PORT || 8000

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`)
})
