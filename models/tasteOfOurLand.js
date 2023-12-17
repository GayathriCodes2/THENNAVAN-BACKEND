// tasteOfOurLand.js
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const tasteOfOurLandSchema = new Schema({
    productImage: { type: String, required: true },
    productName: { type: String, required: true },
    description: { type: String, required: true },
    quantity1: { type: Number, required: true },
    price1: { type: Number, required: true },
    quantityValue1: { type: String, required: true },
    quantity2: { type: Number, required: true },
    price2: { type: Number, required: true },
    quantityValue2: { type: String, required: true },
    quantity3: { type: Number, required: true },
    price3: { type: Number, required: true },
    quantityValue3: { type: String, required: true },
    isOrganic: { type: Boolean, default: false },
    // Add other fields as needed
});

const TasteOfOurLand = mongoose.model('TasteOfOurLand', tasteOfOurLandSchema);

module.exports = TasteOfOurLand;
