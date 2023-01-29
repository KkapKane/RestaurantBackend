const asyncHandler = require('express-async-handler')



// @desc  Get Foods
//@route  GET restaurant/menu/foods
//@access Private
const getFoods = asyncHandler(async(req,res) => {
    res.status(200).json({ message: "Get food" });
})
// @desc  Post Foods
//@route   POST restaurant/menu/foods
//@access Private
const setFoods = asyncHandler(async(req,res) => {
    if(!req.body.text) {
        res.status(400)
        throw new Error('please add a text field')
    }
     res.status(200).json({ message: "Set food" });
})
// @desc  Update Food
//@route  PUT restaurant/menu/foods/:id
//@access Private
const updateFood = asyncHandler(async(req,res) => {
    res.status(200).json({ message: `Update food ${req.params.id}` });
})
// @desc  delete Food
//@route  DELETE restaurant/menu/foods
//@access Private
const deleteFood = asyncHandler(async(req,res) => {
     res.status(200).json({ message: `Delete food ${req.params.id}` });
})

module.exports = {
    getFoods,
    setFoods,
    updateFood,
    deleteFood
}