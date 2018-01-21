const mongoose = require('mongoose');
const db = require('./models');
mongoose.set('debug', true);
mongoose.Promise = Promise;

///// ///// ///// ///// ///// ///// ///// ///// ///// /////

let hotspringsList = [
  {
    name: 'Pagosa Springs',
    lat: '37.263',
    lng: '-107.011',
    temp: 136
  },
  {
    name: 'Salida Hot Springs',
    lat: '38.498',
    lng: '-106.076',
    temp: 160
  },
  {
    name: 'Ouray Hot Springs',
    lat: '38.021',
    lng: '-107.672',
    temp: 156
  },
  {
    name: 'Glenwood Springs',
    lat: '39.548',
    lng: '-107.322',
    temp: 124
  },
  {
    name: 'Mount Princeton Hot Springs',
    lat: '38.133',
    lng: '-107.736',
    temp: 126
  }
]

///// ///// ///// ///// ///// ///// ///// ///// ///// /////

let dropAndSeedHotsprings = () => {
  return new Promise( (resolve, reject) => {
    db.Hotspring.remove({}).then( () => {
      function asyncCreateDoc(doc) {
        return new Promise(resolveAsync => {
          db.Hotspring.create(doc)
            .then(createdDoc => {
              // console.log('CREATED DOCUMENT: ' + createdDoc);
              resolveAsync();
            });
        });
      }
      let createInteractions = hotspringsList.map(asyncCreateDoc);
      let createResults = Promise.all(createInteractions);
      createResults.then( () => {
        console.log('DONE WITH CREATING HOTSPRINGS');
        resolve();
      }).catch(err => {
        console.log('WAS NOT ABLE TO CREATE HOTSPRINGS', err);
        reject();
      });
    }).catch(err => {
      console.log('COULD NOT REMOVE HOTSPRINGS' + err + ' \n \n \n \n \n \n \n \n');
      reject();
    });
  });
};

///// ///// ///// ///// ///// ///// ///// ///// ///// /////

dropAndSeedHotsprings();
