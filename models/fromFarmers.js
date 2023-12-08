// fromFarmers.js
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const fromFarmersSchema = new Schema({
    // Define your FromFarmers model schema here
    name: { type: String, required: true },
    location: { type: String, required: true },
    // Add other fields as needed
});

const FromFarmers = mongoose.model('FromFarmers', fromFarmersSchema);

module.exports = FromFarmers;
