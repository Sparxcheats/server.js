const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

let currentEvent = null;

app.post("/api/setevent", (req, res) => {
  const { event } = req.body;
  if (!event) return res.status(400).json({ error: "Missing event" });
  currentEvent = event;
  res.json({ success: true, event });
});

app.post("/api/clearevents", (req, res) => {
  currentEvent = null;
  res.json({ success: true });
});

app.get("/api/currentevent", (req, res) => {
  res.json({ event: currentEvent });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
