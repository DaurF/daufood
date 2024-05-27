import express from "express";
import ordersRouter from './orders/orders.router.js'
import daysOptionsRouter from "./days-options/days-options.router.js";

const router = express.Router();
const API_TOKEN = "140d03f3-018c-456c-a82a-08691e961e32";

router.use("/orders", ordersRouter);
router.use('/days-options', daysOptionsRouter)
router.post("/register-call", async (req, res) => {
  const agent_id = req.body.agentId;
  const body = {
    agent_id,
    audio_websocket_protocol: "web",
    audio_encoding: "s16le",
    sample_rate: 24000,
  };

  console.log("body");
  console.log(body);

  const response = await fetch("https://api.retellai.com/register-call", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${API_TOKEN}`,
    },
    body: JSON.stringify(body),
  });
  const { call_id: callId, sample_rate: sampleRate } = await response.json();
  return res.status(201).json({ callId, sampleRate });
});

export default router;
