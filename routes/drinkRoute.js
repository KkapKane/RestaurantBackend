const express = require("express");
const router = express.Router();
const {
  getDrinks,
  setDrinks,
  updateDrink,
  deleteDrink,
} = require("../controllers/drinkControllers");

router.route("/").get(getDrinks).post(setDrinks);
router.route("/:id").delete(deleteDrink).put(updateDrink);

module.exports = router;
