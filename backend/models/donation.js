const mongoose = require("mongoose");

const donationSchema = new mongoose.Schema({
  name: String,
  email: String,
  mobile: Number,
  amount: Number,
  comment: String,
});

module.exports = mongoose.model("Donation", donationSchema);
