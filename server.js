const express = require("express");
const app = express();
const port = 3000;

// Endpoint, ktorý vráti aktuálny dátum a čas
app.get("/", (req, res) => {
  const now = new Date();
  res.json({ datetime: now.toISOString() });
});

// Spustenie servera
app.listen(port, () => {
  console.log(`Server beží na http://localhost:${port}`);
});
