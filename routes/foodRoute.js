const express = require('express')
const router = express.Router()
const { getFoods, setFoods, updateFood, deleteFood } = require('../controllers/foodControllers')

router.route('/').get(getFoods).post(setFoods)
router.route('/:id').delete(deleteFood).put(updateFood)



module.exports = router