// loveOfOurLadies.js
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const loveOfOurLadiesSchema = new Schema({
    // Define your LoveOfOurLadies model schema here
    name: { type: String, required: true },
    description: { type: String, required: true },
    // Add other fields as needed
});

const LoveOfOurLadies = mongoose.model('LoveOfOurLadies', loveOfOurLadiesSchema);

module.exports = LoveOfOurLadies;
