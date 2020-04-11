const express = require('express');
const routes = require('./router');
const path = require('path');

const app = express();

app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, '../', 'public')));
app.use(routes);

module.exports = app;