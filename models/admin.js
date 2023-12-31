// admin.js
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const adminSchema = new Schema({
    // Define your Admin model schema here
    admin_id: { type: Number, autoIncrement: true, required: true },
    username: { type: String, required: true },
    password: { type: String, required: true },
    // Add other fields as needed
});

const Admin = mongoose.model('Admin', adminSchema);

module.exports = Admin;