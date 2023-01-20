const EXPRESS = require("express");
const MONGOOSE = require("mongoose");

const user_schema = new MONGOOSE.Schema({
  user_name: { type: String, required: true },
  age: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  address: {
    type: String,
    required: true,
    city: {
      type: String,
      required: true,
    },
    code_zip: {
      type: String,
      required: true,
    },
  },
});

module.exports = MONGOOSE.model("UserCollection", user_schema);
