const mongoose = require("mongoose");

const order = mongoose.Schema({
  name: {
    type: String,
    required: [true, "no item name"],
  },
  qty: {
    type: Number,
    required: [true, "no qty"],
  },
  instruction: {
    type: String,
  },
  price: {
    type: Number,
    required: [true, "no price"],
  },
});

const transactionSchema = mongoose.Schema({
  customerName: {
    type: String,
    required: [true, "please add a name"],
  },
  totalQty: {
    type: Number,
    required: [true, "please add a qty"],
  },
  totalPrice: {
    type: Number,
    required: [true, "No total price found"],
  },
  order: {
    type: [order],
  },
  orderDate: {
    type: DateTime(),
    required: [true, "No date found"],
  },
});

module.exports = mongoose.model("Transaction", transactionSchema);
