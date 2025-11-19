const asyncHandler = require("express-async-handler");
const fs = require("fs");
const path = require("path");

const drinksPath = path.join(__dirname, "../drinks.json");
let drinks = require("../drinks.json");

// @desc   Get Drinks
// @route  GET restaurant/menu/drinks
// @access Private
const getDrinks = asyncHandler(async (req, res) => {
  res.status(200).json(drinks);
});

// @desc   Post Drinks
// @route  POST restaurant/menu/drinks
// @access Private
const setDrinks = asyncHandler(async (req, res) => {
  const newDrink = {
    name: req.body.name,
    price: req.body.price,
    rating: req.body.rating,
    img: req.body.img,
    __v: 0,
  };

  drinks.push(newDrink);
  fs.writeFileSync(drinksPath, JSON.stringify(drinks, null, 2));
  res.status(200).json(newDrink);
});

// @desc   Update Drink
// @route  PUT restaurant/menu/drinks/:id
// @access Private
const updateDrink = asyncHandler(async (req, res) => {
  const index = parseInt(req.params.id);

  if (index < 0 || index >= drinks.length) {
    res.status(400);
    throw new Error("drink not found");
  }

  drinks[index] = { ...drinks[index], ...req.body };
  fs.writeFileSync(drinksPath, JSON.stringify(drinks, null, 2));
  res.status(200).json(drinks[index]);
});

// @desc   delete Drink
// @route  DELETE restaurant/menu/drinks/:id
// @access Private
const deleteDrink = asyncHandler(async (req, res) => {
  const index = parseInt(req.params.id);

  if (index < 0 || index >= drinks.length) {
    res.status(400);
    throw new Error("drink not found");
  }

  const deletedDrink = drinks.splice(index, 1)[0];
  fs.writeFileSync(drinksPath, JSON.stringify(drinks, null, 2));
  res.status(200).json(deletedDrink);
});

module.exports = {
  getDrinks,
  setDrinks,
  updateDrink,
  deleteDrink,
};
