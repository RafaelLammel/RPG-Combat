const mongoose = require('mongoose');

const MapSchema = new mongoose.Schema({
  name: String,
  data: [],
});

module.exports = mongoose.model("Map", MapSchema);