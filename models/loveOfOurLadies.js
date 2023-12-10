// loveOfOurLadies.js
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const loveOfOurLadiesSchema = new Schema({
    loveofourladies_id: { type: Number, autoIncrement: true, required: true },
    productImage: { type: String, required: true },
    productName: { type: String, required: true },
    description: { type: String, required: true },
    quantity1: { type: Number, required: true },
    price1: { type: Number, required: true },
    quantityValue1: { type: String, required: true }, // New field
    quantity2: { type: Number, required: true },
    price2: { type: Number, required: true },
    quantityValue2: { type: String, required: true }, // New field
    quantity3: { type: Number, required: true },
    price3: { type: Number, required: true },
    quantityValue3: { type: String, required: true }, // New field
    isOrganic: { type: Boolean, default: false },
    // Add other fields as needed
});

const LoveOfOurLadies = mongoose.model('LoveOfOurLadies', loveOfOurLadiesSchema);

module.exports = LoveOfOurLadies;
