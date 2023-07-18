const express = require("express");
const dotenv = require("dotenv").config();

const app = express();

const PORT = process.env.PORT || 5000;

app.get("/api/contacts", (req, res) => {
  res.json({ message: "Get All Contacts" });
});

app.listen(PORT, () => {
  console.log(`I am Listening on Port`, PORT);
});
