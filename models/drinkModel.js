const mongoose = require("mongoose");

const drinkSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "please add a name"],
  },
  price: {
    type: Number,
    required: [true, "please add a price"],
  },
  rating: {
    type: Number,
    required: [true, "please add a rating"],
  },
  img: {
    type: String,
    required: [true, "please add an image src"],
  },
});

module.exports = mongoose.model("Drink", drinkSchema);
