const asyncHandler = require("express-async-handler");
const Transaction = require("../models/transactionModel");

// @desc  Get transactions
// @route  GET restaurant/transactions
// @access Private
const getTransactions = asyncHandler(async (req, res) => {
  const transactions = await Transaction.find();
  res.status(200).json(transactions);
});

// @desc  Post Transaction
// @route   POST restaurant/transactions
// @access Private
const setTransactions = asyncHandler(async (req, res) => {
  const transactions = await Transaction.create({
    customerName: req.body.customerName,
    totalQty: req.body.totalQty,
    totalPrice: req.body.totalPrice,
    order: req.body.order,
    orderDate: req.body.orderDate,
  });

  res.status(200).json(transactions);
});

// @desc  Update Transaction
// @route  PUT restaurant/transactions/{id}
// @access Private
const updateTransaction = asyncHandler(async (req, res) => {
  const transactions = await Transaction.findById(req.params.id);
  if (!transactions) {
    res.status(400);
    throw new Error("food not found");
  }
  const updatedTransaction = await Transaction.findByIdAndUpdate(
    req.params.id,
    req.body,
    {
      new: true,
    }
  );
  res.status(200).json(updatedTransaction);
});

// @desc  delete Transaction
// @route  DELETE restaurant/transactions/{id}
// @access Private
const deleteTransaction = asyncHandler(async (req, res) => {
  const transaction = await Transaction.findById(req.params.id);
  if (!transaction) {
    res.status(400);
    throw new Error("food not found");
  }
  const deletedTransaction = await Transaction.findByIdAndDelete(req.params.id);
  res.status(200).json(deletedTransaction);
});

module.exports = {
  getTransactions,
  setTransactions,
  updateTransaction,
  deleteTransaction,
};
