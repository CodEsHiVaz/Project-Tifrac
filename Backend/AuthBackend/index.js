const { application } = require("express");
const express = require("express");
const connection = require("./db");
const auth = require("./Routes/Login");
require("dotenv").config();
const cors = require("cors");
const app = express();
app.use(express.json());
app.use(cors());
app.use("/auth", auth);
const port = process.env.PORT || 3030;
app.get("/", (req, res) => {
  res.send({ homeRoute: "ok", success: true });
});

app.listen(port, async () => {
  console.log("listening on port " + port);
  try {
    await connection;
    console.log("connection established with database");
  } catch (error) {
    console.log("error", error);
  }
});
