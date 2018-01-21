/* jshint esversion: 6 */

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const methodOverride = require('method-override');

const mongoose = require('mongoose');
mongoose.Promise = Promise;
const db = require('../models/index.js');

app.use(bodyParser.json());

// HANDLE CORS
function handleCORS(req, res, next) {
  console.log('HANDLECORS HIT');
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
  next();
}

// GET ALL HOTSPRINGS
function showAllHotsprings(req, res) {
  console.log('SHOWALLHOTSPRINGS HIT');
  db.Hotspring.find({})
    .then(hotsprings => {
      res.setHeader('Access-Control-Allow-Origin', '*');
      res.json(hotsprings);
    })
    .catch(err => {
      console.log(err);
    });
}

// SAVE NEW HOTSPRING
function createNewHotspring(req, res) {
  console.log('CREATENEWHOTSPRING HIT');
  db.Hotspring.create({
    name: req.body.name,
    lat: req.body.lat,
    lng: req.body.lng,
    temp: req.body.temp
  })
    .then(createdHotspring => {
      res.setHeader('Access-Control-Allow-Origin', '*');
      res.json(createdHotspring);
    })
    .catch(err => {
      console.log(err);
    });
}

// GET SINGLE HOTSPRING
function showOneHotspring(req, res) {
  console.log('SHOWONEHOTSPRING HIT');
  db.Hotspring.findById(req.params.id)
    .then(hotspring => {
      res.setHeader('Access-Control-Allow-Origin', '*');
      res.json(hotspring);
    })
    .catch(err => {
      console.log(err);
    });
}

// UPDATE HOTSPRING
function updateHotspring(req, res) {
  console.log('UPDATEHOTSPRING HIT');
  db.Hotspring.findByIdAndUpdate(req.params.id,
    { '$SET':
      {
        'name': req.body.name,
        'lat': req.body.lat,
        'lng': req.body.lng,
        'temp': req.body.temp
      }
    }, { new: true }, function(err, updatedHotspring) {
      if (err) throw err;
      res.setHeader('Access-Control-Allow-Origin', '*');
      res.json(updatedHotspring);
    });
}

// DELETE HOTSPRING
function deleteHotspring(req, res) {
  console.log('DELETEHOTSPRING HIT');
  db.Hotspring.findByIdAndRemove(req.params.id, function(err, deletedHotspring) {
    if (err) throw err;
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.json('deleted');
  });
}

module.exports = {
  handleCORS: handleCORS,
  showAllHotsprings: showAllHotsprings,
  createNewHotspring: createNewHotspring,
  showOneHotspring: showOneHotspring,
  updateHotspring: updateHotspring,
  deleteHotspring: deleteHotspring
};
