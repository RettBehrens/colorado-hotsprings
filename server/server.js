/* jshint esversion: 6 */

const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const mongoose = require('mongoose');
const morgan = require('morgan');
const bodyParser = require('body-parser');

// request logging
app.use(morgan('dev'));

// API config
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));

// routes
const hotspringRoutes = require('./routes/hotsprings.js');
app.use(hotspringRoutes);

// start server
app.listen(port, () => {
  console.log(`server running on: ${port}`);
});
