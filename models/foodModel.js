const mongoose = require('mongoose')

const foodSchema = mongoose.Schema({
    name: {
        type: String,   
        required: [true, 'please add a name']
    },
    nativeName: {
        type: String,   
        required: [true, 'please add a name']
    },
    description: {
        type: String,   
        required: [true, 'please add a description']
    },
    type: {
        type: String,   
        required: [true, 'please add a type']
    },
    sub_cat: {
        type: String,   
        required: [true, 'please add a sub category']
    },
    price: {
        type: Number,   
        required: [true, 'please add a price']
    },
    rating: {
        type: Number,   
        required: [true, 'please add a rating']
    },
    img: {
        type: String,   
        required: [true, 'please add an image src']
    },
   

})

module.exports = mongoose.model('Food', foodSchema)