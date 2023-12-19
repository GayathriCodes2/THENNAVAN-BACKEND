const mongoose = require('mongoose');

// Define MongoDB connection URL and options
const url = 'mongodb+srv://thennavanstores:UMzFMVRG5sPQy5HE@cluster0.eth6nzy.mongodb.net/?retryWrites=true&w=majority'; 
const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
};

// Connect to MongoDB
mongoose.connect(url, options)
    .then(() => console.log('Connected to MongoDB successfully!'))
    .catch(error => console.error('Error connecting to MongoDB:', error));
 
module.exports = mongoose.connection;
