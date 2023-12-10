// fromFarmers.js
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const fromFarmersSchema = new Schema({
    fromfarmers_id: { type: Number, required: true, unique: true, autoIncrement: true },
    productImage: { type: String, required: true }, // Assuming the image path or URL is a string
    productName: { type: String, required: true },
    description: { type: String, required: true },
    quantity1: { type: Number, required: true },
    quantityValue1: { type: String, required: true},
    price1: { type: Number, required: true},
    quantity2: { type: Number, required: true },
    quantityValue2: { type: String, required: true},
    price2: { type: Number, required: true },
    quantity3: { type: Number, required: true },
    quantityValue3: { type: String, required: true},
    price3: { type: Number, required: true },
    isOrganic: { type: Boolean, default: false }, // Assuming it's a boolean field
    // Add other fields as needed
});

const FromFarmers = mongoose.model('FromFarmers', fromFarmersSchema);

module.exports = FromFarmers;
