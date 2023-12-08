// tasteOfOurLand.js
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const tasteOfOurLandSchema = new Schema({
    // Define your TasteOfOurLand model schema here
    name: { type: String, required: true },
    flavor: { type: String, required: true },
    // Add other fields as needed
});

const TasteOfOurLand = mongoose.model('TasteOfOurLand', tasteOfOurLandSchema);

module.exports = TasteOfOurLand;
