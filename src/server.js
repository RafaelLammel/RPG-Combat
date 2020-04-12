const express = require('express');
const routes = require('./router');
const mongoose = require('mongoose');
const path = require('path');
const cors = require('cors');
require('dotenv/config');

const app = express();

const MapController = require('./controllers/MapController');

mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

app.set('view engine', 'ejs');
app.use(cors());
app.use(express.static(path.join(__dirname, '../', 'public')));
app.use(express.json());
app.use(routes);

const server = require('http').Server(app);
const io = require('socket.io')(server);

io.on('connection', socket => {

  var room = '';

  socket.emit('getPageName');

  socket.on('joinRoom', data => {
    room = data;
    socket.join(room);
  });

  socket.on('update', data => {
    socket.to(room).emit('recieveUdpate', data);
  });

  socket.on('mapUpdate', MapController.update)

});

module.exports = server;