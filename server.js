const express = require("express");
const path = require("path");

const app = express();
const PORT = 3000;

/* serve website */
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.listen(PORT, () => {
  console.log("✅ VETO WEB ONLINE http://localhost:3000");
});