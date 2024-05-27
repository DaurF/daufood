import dotenv from "dotenv";

dotenv.config();
import express from "express";
import cors from "cors";
import api from "./routes/api.js";


const app = express();

app.use(cors());
app.use(express.json());

// Routers
app.use("/api/v1", api);

const PORT = process.env.PORT || 8000

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`)
})
