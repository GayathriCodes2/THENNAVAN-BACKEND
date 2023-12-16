// loveOfOurLadies.js
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const loveOfOurLadiesSchema = new Schema({
    loveofourladies_id: { type: Number, autoIncrement: true},
    productImage: { type: String },//
    productName: { type: String },
    description: { type: String },
    quantity1: { type: Number },
    price1: { type: Number },
    quantity1Unit: { type: String }, // New field
    quantity2: { type: Number },
    price2: { type: Number },
    quantity2Unit: { type: String }, // New field
    quantity3: { type: Number },
    price3: { type: Number },
    quantity3Unit: { type: String }, // New field
    isOrganic: { type: Boolean, default: true },
    // Add other fields as needed
});

const LoveOfOurLadies = mongoose.model('LoveOfOurLadies', loveOfOurLadiesSchema);

module.exports = LoveOfOurLadies;