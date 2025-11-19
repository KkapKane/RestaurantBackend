const asyncHandler = require("express-async-handler");
const fs = require("fs");
const path = require("path");

const foodsPath = path.join(__dirname, "../foods.json");
let foods = require("../foods.json");

// @desc  Get Foods
// @route  GET restaurant/menu/foods
// @access Private
const getFoods = asyncHandler(async (req, res) => {
  res.status(200).json(foods);
});

// @desc  Post Foods
// @route   POST restaurant/menu/foods
// @access Private
const setFoods = asyncHandler(async (req, res) => {
  const newFood = {
    name: req.body.name,
    native_name: req.body.nativeName || req.body.native_name,
    description: req.body.description,
    type: req.body.type,
    sub_cat: req.body.sub_cat,
    price: req.body.price,
    rating: req.body.rating,
    img: req.body.img,
    __v: 0,
  };

  foods.push(newFood);
  fs.writeFileSync(foodsPath, JSON.stringify(foods, null, 2));
  res.status(200).json(newFood);
});

// @desc  Update Food
// @route  PUT restaurant/menu/foods/:id
// @access Private
const updateFood = asyncHandler(async (req, res) => {
  const index = parseInt(req.params.id);

  if (index < 0 || index >= foods.length) {
    res.status(400);
    throw new Error("food not found");
  }

  foods[index] = { ...foods[index], ...req.body };
  fs.writeFileSync(foodsPath, JSON.stringify(foods, null, 2));
  res.status(200).json(foods[index]);
});

// @desc  delete Food
// @route  DELETE restaurant/menu/foods/:id
// @access Private
const deleteFood = asyncHandler(async (req, res) => {
  const index = parseInt(req.params.id);

  if (index < 0 || index >= foods.length) {
    res.status(400);
    throw new Error("food not found");
  }

  const deletedFood = foods.splice(index, 1)[0];
  fs.writeFileSync(foodsPath, JSON.stringify(foods, null, 2));
  res.status(200).json(deletedFood);
});

module.exports = {
  getFoods,
  setFoods,
  updateFood,
  deleteFood,
};
