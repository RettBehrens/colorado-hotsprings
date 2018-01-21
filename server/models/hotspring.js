/* jshint esversion: 6 */

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let HotspringSchema = new Schema({
  name: String,
  lat: String,
  lng: String,
  temp: Number
});

let Hotspring = mongoose.model('Hotspring', HotspringSchema);

module.exports = Hotspring;
