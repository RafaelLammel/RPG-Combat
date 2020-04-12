var socket = io.connect('http://192.168.15.8:3001');

socket.on('getPageName', () => {
  socket.emit('joinRoom', name);
});

socket.on('recieveUdpate', data => {
  let X = data.i*sizeX+thikness+0.5;
  let Y = data.j*sizeY+thikness+0.5;
  let width = sizeX-(thikness*2);
  let height = sizeY-(thikness*2);
  map[data.position] = data.color;
  ctx.fillStyle = data.color;
  ctx.clearRect(X, Y, width, height);
  ctx.fillRect(X, Y, width, height);
})