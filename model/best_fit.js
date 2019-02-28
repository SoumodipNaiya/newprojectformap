const mongoose = require('mongoose');
const best_fit_schema = new mongoose.Schema({
    geometry: {
        coordinates: Array,
        type: {
            type: String
        }
    },
    type: {
        type: String
    },
    number: Number
}, {collection: 'zones'});

let best_fit_model = module.exports = mongoose.model('best_fit', best_fit_schema);