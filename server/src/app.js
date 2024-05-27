import express from "express";
import cors from "cors";
import api from "./routes/api.js";


const app = express();

app.use(cors());
app.use(express.json());

// Routers
app.use("/api/v1", api);

export default app;
