export async function httpCallAssistant(req, res) {
  const RETELL_API_TOKEN = process.env.RETELL_API_TOKEN;

  const {agentId} = req.params;
  const body = {
    agent_id: agentId,
    audio_websocket_protocol: "web",
    audio_encoding: "s16le",
    sample_rate: 24000,
  };

  const response = await fetch("https://api.retellai.com/register-call", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${RETELL_API_TOKEN}`,
    },
    body: JSON.stringify(body),
  });

  const data = await response.json();
  console.log(data)
  const {call_id: callId, sample_rate: sampleRate} = data;
  return res.status(201).json({callId, sampleRate});
}
