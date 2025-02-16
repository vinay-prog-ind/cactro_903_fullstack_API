const express = require('express');
const cors = require('cors');
const app = express();
require('dotenv').config();
const mongoose = require('mongoose');
const pollRouter = require('./src/router/pollRouter')



app.use(cors());
app.use(express.json());
app.use('/api', pollRouter);




module.exports = app;