const mongoose = require('mongoose');

const beerSchema = mongoose.Schema({
    beerName: {
        type: String,
        required: true,
    },
    rating: {
        type: String,
        required: false,
    },
})

var beerdata = mongoose.model('beerdata', beerSchema);
module.exports = beerdata;