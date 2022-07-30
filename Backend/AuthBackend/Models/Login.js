const mongoose = require("mongoose");
const userSchema = mongoose.Schema({
  mailid: { type: String, require: true },
  password: { type: String, require: true },
});
const UserModel = mongoose.model("sci_User", userSchema);
module.exports = UserModel;
