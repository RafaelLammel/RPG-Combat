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

var hashMap = new Map();

io.on('connection', socket => {

  var room = '';

  /*
  * Requisita o nome da página acessada por meio de um evento do frontEnd
  */
  socket.emit('getPageName');

  /*
  * Coloca o socket em uma sala e retorna o mapa pego do banco, caso seja 
  * o primeiro a entrar, ou do Map caso a sala já possua alguém
  * 
  * @params: data: nome da sala
  * 
  * @return: map: o mapa em formato de Array
  */
  socket.on('joinRoom', async data => {
    room = data.name;
    let map;
    if(io.sockets.adapter.rooms[room] == undefined) {
      map = await MapController.getMap({name: room, size: data.mapSize});
      map = map.data;
      hashMap.set(room, map);
    } else {
      map = hashMap.get(room); 
    }
    socket.emit('map', map);
    socket.join(room);
  });

  /*
  * Atualiza o Map da sala no servidor e para todos os sockets da sala
  * sempre que há uma atualização vinda de algum socket
  * 
  * @param: data: JSON, contendo nome do mapa e o próprio mapa em formato de array
  * 
  * @return: envia para todos os sockets na sala o novo mapa
  *  
  */
  socket.on('update', data => {
    hashMap.set(room, data.map);
    socket.to(room).emit('recieveUdpate', data);
  });

  /*
  * Atualiza o mapa no banco de dados (Mais detalhes no controller)
  */
  socket.on('mapUpdate', MapController.update);

  /*
  * Verifica se o socket que desconectou foi o último a deixar a sala
  * para poder limpar o Map
  */
  socket.on('disconnect', () => {
    if (io.sockets.adapter.rooms[room] == undefined) {
      hashMap.delete(room);
    }
  });

});

module.exports = server;