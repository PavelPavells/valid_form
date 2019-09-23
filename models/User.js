const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// Create Schema
const UserSchema = new Schema({
  company_name: {
    type: String,
    required: true
  },
  company_inn: {
    type: Number,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  pass: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  contact_person: {
    type: String,
    required: false
  },
  company_phone: {
    type: String,
    required: false
  },
  date: {
    type: Date,
    default: Date.now
  }
});
module.exports = User = mongoose.model("users", UserSchema);
