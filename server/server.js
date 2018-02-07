/* jshint esversion: 6 */

const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const mongoose = require('mongoose');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const path = require('path');

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

const forceSSL = function() {
  return function (req, res, next) {
    if (req.headers['x-forwarded-proto'] !== 'https') {
      return res.redirect(
        ['https://', req.get('Host'), req.url].join('')
      );
    }
    next();
  }
}

app.use(forceSSL());

app.use(express.static(path.join(__dirname, '../client/dist')));

app.get('/', function(req, res) {
  if (port === '3000') {
    res.sendFile('/client/dist/index.html');
  } else {
    res.sendFile('/app/client/dist/index.html');
  }

});

app.get('/hotsprings', function(req, res) {
  if (port === '3000') {
    res.sendFile('/client/dist/index.html');
  } else {
    res.sendFile('/app/client/dist/index.html');
  }

});

app.get('/about', function(req, res) {
  if (port === '3000') {
    res.sendFile('/client/dist/index.html');
  } else {
    res.sendFile('/app/client/dist/index.html');
  }

});

// start server
app.listen(port, () => {
  console.log(`server running on: ${port}`);
});
