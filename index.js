// index.js

const express = require('express');
const bodyParser = require('body-parser');
const dbConnect = require('./database/connection'); // Import the run function
const errorMiddleware = require('./middleware/errorMiddleware');

// Include your routes
const adminRoutes = require('./routes/admin');
const fromFarmersRoutes = require('./routes/fromfarmers');
const tasteOfOurLandRoutes = require('./routes/tasteofourland');
const loveOfOurLadiesRoutes = require('./routes/loveofourladies');

const app = express();
const port = 3000;

app.use(bodyParser.json());

app.use('/admins', adminRoutes);
app.use('/fromfarmers', fromFarmersRoutes);
app.use('/tasteofourland', tasteOfOurLandRoutes);
app.use('/loveofourladies', loveOfOurLadiesRoutes);

// Call the run function to connect to MongoDB
dbConnect()
    .then(() => {
        app.listen(port, () => {
            console.log(`Server is running on http://localhost:${port}`);
        });
    })
    .catch(error => {
        console.error('Error connecting to MongoDB:', error);
    });

app.use(errorMiddleware);
