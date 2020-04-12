const express = require('express');
const routes = require('./router');
const mongoose = require('mongoose');
const path = require('path');

const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);

const MapController = require('./controllers/MapController');

mongoose.connect('mongodb://localhost:27017/rpg', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, '../', 'public')));
app.use(express.json());
app.use(routes);

server.listen(3001);

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

module.exports = app;