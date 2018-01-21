/* jshint esversion: 6 */

const mongoose = require('mongoose');
mongoose.connect(
  process.env.MONGODB_URI ||
  process.env.MONGOLAB_URI ||
  process.env.MONGOHQ_URL ||
  'mongodb://localhost/colorado-hotsprings'
)
  .then(() =>  console.log('connection succesful'))
  .catch((err) => console.error(err));

module.exports.Hotspring = require('./hotspring.js');
