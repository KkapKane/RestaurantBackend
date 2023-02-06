const express = require("express");
const router = express.Router();
const {
  getTransactions,
  setTransactions,
  updateTransaction,
  deleteTransaction,
} = require("../controllers/transactionController");

router.route("/").get(getTransactions).post(setTransactions);
router.route("/:id").delete(deleteTransaction).put(updateTransaction);

module.exports = router;
