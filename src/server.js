const express = require('express');
const routes = require('./router');
const mongoose = require('mongoose');
const path = require('path');

const app = express();

mongoose.connect('mongodb://localhost:27017/rpg', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, '../', 'public')));
app.use(routes);

module.exports = app;