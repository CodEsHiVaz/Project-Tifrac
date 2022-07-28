const mongoose = require("mongoose");

const subjectSchema = mongoose.Schema({
  id: { type: Number },
  subject:{type:String},
  title: { type: String, require: true },
  vid_1: { type: String },
  t1: { type: String },
  thum_1: { type: String },
  vid_2: { type: String },
  t2: { type: String },
  thum_2: { type: String },
  cheat_img_1: { type: String },
  cheat_img_2: { type: String },
  cheat_img_3: { type: String },
});

const subjectModel = mongoose.model("subject", subjectSchema);
module.exports = subjectModel;
