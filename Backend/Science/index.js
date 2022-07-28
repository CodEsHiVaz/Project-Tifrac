const express = require("express");
const connection = require("./db");
const subjectRoute = require("./Routes/subjectRoute");

const ENV= require("dotenv")
ENV.config();
const PORT=process.env.PORT
const app=express();

const cors = require("cors");
app.use(cors());

app.use(express.json());

app.use("/subjects", subjectRoute);

app.get("/",(req,res)=>{
    res.send("This is home, for data use /subjects")
})

app.listen(PORT, async()=>{
    try {
        await connection;
      } catch (err) {
        console.log("error", err)
      }
      console.log(`Listen to server ${PORT}`);
})