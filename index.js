const express = require('express');
var cors = require('cors');
const dotenv = require('dotenv').config();
const port = process.env.PORT || 5000;
const connectDB = require('./config/db');
const { errorHandler } = require('./middleware/errorMiddleware');

connectDB();

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/restaurant/menu/foods', require('./routes/foodRoute'));
app.use('/restaurant/menu/drinks', require('./routes/drinkRoute'));
app.use('/restaurant/transactions', require('./routes/transactionRoute'));

app.use(errorHandler);

app.listen(port, () => console.log(`it's alive on http://localhost:${port}`));
