// index.js
const cors = require('cors');
const express = require('express');
const bodyParser = require('body-parser');
const dbConnect = require('./database/connection');
const errorMiddleware = require('./middleware/errorMiddleware');

// Include your routes
const adminRoutes = require('./routes/admin');
const fromFarmersRoutes = require('./routes/fromfarmers');
const tasteOfOurLandRoutes = require('./routes/tasteofourland');
const loveOfOurLadiesRoutes = require('./routes/loveofourladies');


const app = express();
const port = 3002;

app.use(cors());
app.use(bodyParser.json({ limit: '20mb' }));
app.use('/admins', adminRoutes);
app.use('/fromfarmers', fromFarmersRoutes);
app.use('/tasteofourland', tasteOfOurLandRoutes);
app.use('/loveofourladies', loveOfOurLadiesRoutes);

app.use(errorMiddleware);

dbConnect.once('open', () => {
    app.listen(port, () => {
        console.log(`Server is running on http://localhost:${port}`);
    });
});
