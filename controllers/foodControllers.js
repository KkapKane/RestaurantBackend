const asyncHandler = require('express-async-handler')
const Food = require('../models/foodModel')


// @desc  Get Foods
// @route  GET restaurant/menu/foods
// @access Private
const getFoods = asyncHandler(async(req,res) => {
    const foods = await Food.find()
    res.status(200).json(foods);
})

// @desc  Post Foods
// @route   POST restaurant/menu/foods
// @access Private
const setFoods = asyncHandler(async(req,res) => {

    const foods = await Food.create({
        name: req.body.name,
        nativeName: req.body.nativeName,
        description: req.body.description,
        type: req.body.type,
        sub_cat: req.body.sub_cat,
        price: req.body.price,
        rating: req.body.rating,
        img: req.body.img
    })

     res.status(200).json(foods);
})

// @desc  Update Food
// @route  PUT restaurant/menu/foods/:id
// @access Private
const updateFood = asyncHandler(async(req,res) => {
    const food = await Food.findById(req.params.id)
    if(!food){
        res.status(400)
        throw new Error('food not found')
    }
    const updatedFood = await Food.findByIdAndUpdate(req.params.id, req.body, {new : true})
    res.status(200).json(updatedFood);
})

// @desc  delete Food
// @route  DELETE restaurant/menu/foods
// @access Private
const deleteFood = asyncHandler(async(req,res) => {
    const food = await Food.findById(req.params.id)
    if(!food){
        res.status(400)
        throw new Error('food not found')
    }
    const deletedFood = await Food.findByIdAndDelete(req.params.id)
     res.status(200).json(deletedFood);
})

module.exports = {
    getFoods,
    setFoods,
    updateFood,
    deleteFood
}