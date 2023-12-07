const express = require('express');
const bodyParser = require('body-parser')
const db = require('./database/connection')
const errorMiddleware = require('./middleware/errorMiddleware');
const fromFarmersRoutes = require('./routes/fromfarmers');
const loveOfOurLadiesRoutes = require('./routes/loveofourladies');
const tasteOfOurLandRoutes = require('./routes/tasteofourland');


const app = express();
const port = 3000;

app.use(bodyParser.json());

app.use('/fromfarmers', fromFarmersRoutes);
app.use('/loveofourladies', loveOfOurLadiesRoutes);
app.use('/tasteofourland', tasteOfOurLandRoutes);

app.use(errorMiddleware);

db.once('open', () => {
    app.listen(port, () => {
        console.log(`Server is running on http://localhost:${port}`);
    });
});