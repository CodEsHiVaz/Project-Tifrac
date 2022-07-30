const { Router } = require("express");
const UserModel = require("../Models/Login");
const auth = Router();

auth.get("/", async (req, res) => {
  const user = await UserModel.find();
  try {
    res.send(user);
  } catch (error) {
    res.send(error.message);
    console.log(error);
  }
});
auth.post("/signup", async (req, res) => {
  const user = await new UserModel(req.body);
  console.log(`🚀 ~ auth.post ~ user`, user);
  user.save();
  try {
    res.send(user);
  } catch (error) {
    res.send(error.message);
    console.log(error);
  }
});
auth.post("/login", async (req, res) => {
  const user = await UserModel.find(req.body);
  console.log(user);
  try {
    if (user.length > 0) {
      res.send(user[0].mailid);
    } else {
      res.send("user not found");
    }
  } catch (error) {
    res.send(error.message);
    console.log(error);
  }
});

module.exports = auth;
