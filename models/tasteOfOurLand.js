// tasteOfOurLand.js
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const tasteOfOurLandSchema = new Schema({
    productImage: { type: String, required: true },
    productName: { type: String, required: true },
    category: {type:String, default: 'TasteOfOurLand'},
    description: { type: String, required: true },
    quantity1: { type: Number },
    price1: { type: Number },
    quantity1Unit: { type: String },
    quantity2: { type: Number },
    price2: { type: Number },
    quantity2Unit: { type: String },
    quantity3: { type: Number },
    price3: { type: Number },
    quantity3Unit: { type: String },
    isOrganic: { type: Boolean, default: true },
    // Add other fields as needed
});

const TasteOfOurLand = mongoose.model('TasteOfOurLand', tasteOfOurLandSchema);

module.exports = TasteOfOurLand;
