const express = require('express');

const MapController = require('./controllers/MapController');

const routes = express.Router();

routes.get('/:pageName?', MapController.get);

module.exports = routes;