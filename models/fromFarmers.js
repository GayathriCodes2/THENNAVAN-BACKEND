// fromFarmers.js
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const fromFarmersSchema = new Schema({
    productImage: { type: String, required: true },
    productName: { type: String, required: true },
    description: { type: String, required: true },
    category: {type:String, default: 'Farmers'},
    quantity1: { type: Number },//2
    price1: { type: Number },//$
    quantity1Unit: { type: String },//kg
    quantity2: { type: Number },
    price2: { type: Number },
    quantity2Unit: { type: String },
    quantity3: { type: Number },
    price3: { type: Number },
    quantity3Unit: { type: String },
    isOrganic: { type: Boolean, default: true },
    isAvailableOn: { type: Boolean, default: true },
});

const FromFarmers = mongoose.model('FromFarmers', fromFarmersSchema);

module.exports = FromFarmers;
