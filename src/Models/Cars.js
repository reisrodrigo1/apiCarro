const mongoose = require('mongoose')

const Schema = new mongoose.Schema({
    carBrand:{
        type: String,
        required: true
    },
    carModel:{
        type: String,
        required: true
    },
    carYear:{
        type: Number,
        required: true
    },
    carFuel:{
        type: String,
        required: true
    },
    carColor:{
        type: String,
        required: true
    },
    carPrice:{
        type: Number,
        required: true
    },
    username: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
})
module.exports = mongoose.model('Cars', Schema)