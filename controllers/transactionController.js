const asyncHandler = require("express-async-handler");
const fs = require("fs");
const path = require("path");

const transactionsPath = path.join(__dirname, "../transactions.json");

// Initialize transactions array
let transactions = [];
if (fs.existsSync(transactionsPath)) {
  transactions = JSON.parse(fs.readFileSync(transactionsPath, "utf8"));
} else {
  fs.writeFileSync(transactionsPath, JSON.stringify([], null, 2));
}

// @desc  Get transactions
// @route  GET restaurant/transactions
// @access Private
const getTransactions = asyncHandler(async (req, res) => {
  res.status(200).json(transactions);
});

// @desc  Post Transaction
// @route   POST restaurant/transactions
// @access Private
const setTransactions = asyncHandler(async (req, res) => {
  const newTransaction = {
    customerName: req.body.customerName,
    totalQty: req.body.totalQty,
    totalPrice: req.body.totalPrice,
    order: req.body.order,
    orderDate: req.body.orderDate || new Date(),
    __v: 0,
  };

  transactions.push(newTransaction);
  fs.writeFileSync(transactionsPath, JSON.stringify(transactions, null, 2));
  res.status(200).json(newTransaction);
});

// @desc  Update Transaction
// @route  PUT restaurant/transactions/{id}
// @access Private
const updateTransaction = asyncHandler(async (req, res) => {
  const index = parseInt(req.params.id);

  if (index < 0 || index >= transactions.length) {
    res.status(400);
    throw new Error("transaction not found");
  }

  transactions[index] = { ...transactions[index], ...req.body };
  fs.writeFileSync(transactionsPath, JSON.stringify(transactions, null, 2));
  res.status(200).json(transactions[index]);
});

// @desc  delete Transaction
// @route  DELETE restaurant/transactions/{id}
// @access Private
const deleteTransaction = asyncHandler(async (req, res) => {
  const index = parseInt(req.params.id);

  if (index < 0 || index >= transactions.length) {
    res.status(400);
    throw new Error("transaction not found");
  }

  const deletedTransaction = transactions.splice(index, 1)[0];
  fs.writeFileSync(transactionsPath, JSON.stringify(transactions, null, 2));
  res.status(200).json(deletedTransaction);
});

module.exports = {
  getTransactions,
  setTransactions,
  updateTransaction,
  deleteTransaction,
};
