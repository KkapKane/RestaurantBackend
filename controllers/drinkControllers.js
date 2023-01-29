const asyncHandler = require("express-async-handler");
const Drink = require("../models/drinkModel");

// @desc   Get Drinks
// @route  GET restaurant/menu/drinks
// @access Private
const getDrinks = asyncHandler(async (req, res) => {
  const drinks = await Drink.find();
  res.status(200).json(drinks);
});

// @desc   Post Drinks
// @route  POST restaurant/menu/drinks
// @access Private
const setDrinks = asyncHandler(async (req, res) => {
  const drinks = await Drink.create({
    name: req.body.name,
    price: req.body.price,
    rating: req.body.rating,
    img: req.body.img,
  });

  res.status(200).json(drinks);
});

// @desc   Update Drink
// @route  PUT restaurant/menu/drinks/:id
// @access Private
const updateDrink = asyncHandler(async (req, res) => {
  const drink = await Drink.findById(req.params.id);
  if (!drink) {
    res.status(400);
    throw new Error("drink not found");
  }
  const updatedDrink = await Drink.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.status(200).json(updatedDrink);
});

// @desc   delete Drink
// @route  DELETE restaurant/menu/drinks/:id
// @access Private
const deleteDrink = asyncHandler(async (req, res) => {
  const drink = await Drink.findById(req.params.id);
  if (!drink) {
    res.status(400);
    throw new Error("drink not found");
  }
  const deletedDrink = await Drink.findByIdAndDelete(req.params.id);
  res.status(200).json(deletedDrink);
});

module.exports = {
  getDrinks,
  setDrinks,
  updateDrink,
  deleteDrink,
};
