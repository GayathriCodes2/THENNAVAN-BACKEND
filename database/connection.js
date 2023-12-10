const mongoose = require('mongoose');

// Define MongoDB connection URL and options
const url = 'mongodb+srv://thennavanstores:Muthukumar%402002@cluster0.c9rj3h5.mongodb.net/'; 
const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
};

// Connect to MongoDB
mongoose.connect(url, options)
    .then(() => console.log('Connected to MongoDB successfully!'))
    .catch(error => console.error('Error connecting to MongoDB:', error));

module.exports = mongoose.connection;
