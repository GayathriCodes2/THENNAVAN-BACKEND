const mongoose = require('mongoose');

// Define MongoDB connection URL and options
const url = 'mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+1.10.1'; 
const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
};

// Connect to MongoDB
mongoose.connect(url, options)
    .then(() => console.log('Connected to MongoDB successfully!'))
    .catch(error => console.error('Error connecting to MongoDB:', error));

module.exports = mongoose.connection;