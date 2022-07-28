const { Router } = require("express");
const subjectModel = require("../Model/subjects");

const subjectRoute =Router();

subjectRoute.get("/id/:id", async (req, res) => {
    let id = req.params.id
        const subject = await subjectModel.find({_id:id})
        res.send(subject)
    })

subjectRoute.get("/", async(req,res)=>{
    let physics= await subjectModel.find({})
    res.send(physics)
})

subjectRoute.get("/physics", async(req,res)=>{
    let physics= await subjectModel.find({subject:"Physics"})
    res.send(physics)
  })


subjectRoute.get("/chemistry", async(req,res)=>{
    let chemistry= await subjectModel.find({subject:"Chemistry"})
    res.send(chemistry)
  })


subjectRoute.get("/maths", async(req,res)=>{
    let maths= await subjectModel.find({subject:"Maths"})
    res.send(maths)
  })


subjectRoute.get("/biology", async(req,res)=>{
    let biology= await subjectModel.find({subject:"Biology"})
    res.send(biology)
  })

subjectRoute.post("/", async(req,res)=>{
  let data;
  req.body.data.map((el) => {
    data = new subjectModel(el);
    data.save();
  });
  res.send(data);
})

module.exports=subjectRoute