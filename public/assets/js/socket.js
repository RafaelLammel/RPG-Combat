var socket = io.connect(socketURL);

socket.on('getPageName', () => {
  socket.emit('joinRoom', {name, mapSize});
});

socket.on('map', data => {
  map = data;
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  bw = canvas.width;
  bh = canvas.height;
  mapSize = Math.sqrt(map.length);
  sizeX = bw/(mapSize);
  sizeY = bh/(mapSize);
  let main = document.getElementById("main");
  let loading = document.getElementById("loading");
  loading.classList.add("invisible");
  main.classList.remove("invisible");
  drawGrid(bw, bh, sizeX, sizeY, thikness, ctx);
})

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