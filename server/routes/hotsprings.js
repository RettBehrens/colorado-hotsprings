/* jshint esversion: 6 */

const express = require('express');
const router = express.Router();

const hotspringController = require('../controllers/hotsprings');

router.route('/api/hotsprings')
  // GET ALL HOTSPRINGS
  .get(hotspringController.showAllHotsprings)
  // SAVE NEW HOTSPRING
  .post(hotspringController.createNewHotspring);

router.route('/api/hotsprings/:id')
  // GET SINGLE HOTSPRING
  .get(hotspringController.showOneHotspring)
  // UPDATE HOTSPRING
  .put(hotspringController.updateHotspring)
  // DELETE HOTSPRING
  .delete(hotspringController.deleteHotspring);

router.route('/*')
  // HANDLE CORS
  .options(hotspringController.handleCORS);

module.exports = router;
