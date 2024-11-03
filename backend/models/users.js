const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  membershipType: String,
  mobile: Number,
  Date: Date
});

module.exports = mongoose.model("User", userSchema);