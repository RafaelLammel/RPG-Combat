window.addEventListener('resize', () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  bw = canvas.width;
  bh = canvas.height;
  sizeX = bw/mapSize;
  sizeY = bh/mapSize;
  drawGrid(bw, bh, sizeX, sizeY, thikness, ctx);
});


canvas.addEventListener('mousedown', e => {
  mouseDown = e.button;

  let X = Math.floor(e.offsetX/sizeX)*sizeX+thikness+0.5;
  let Y = Math.floor(e.offsetY/sizeY)*sizeY+thikness+0.5;
  let width = sizeX-(thikness*2);
  let height = sizeY-(thikness*2);
  if(mouseDown == 0) {
    clearTimeout(update);
    let i = (Math.round((Math.floor(e.offsetX/sizeX)*sizeX*mapSize)/canvas.width));
    let j = (Math.round((Math.floor(e.offsetY/sizeY)*sizeY*mapSize)/canvas.height));
    map[i*mapSize+j] = color;

    ctx.clearRect(X, Y, width, height);
    ctx.fillStyle = color;
    ctx.fillRect(X, Y, width, height);
    socket.emit('update', {i: i, j: j, position: i*mapSize+j, color: color, map});
  } else if(mouseDown == 2) {
    clearTimeout(update);
    let i = (Math.round((Math.floor(e.offsetX/sizeX)*sizeX*mapSize)/canvas.width));
    let j = (Math.round((Math.floor(e.offsetY/sizeY)*sizeY*mapSize)/canvas.height));
    map[i*mapSize+j] = '#ffffff';
    ctx.clearRect(X, Y, width, height);
    socket.emit('update', {i: i, j: j, position: i*mapSize+j, color: '#ffffff', map});
  }
})

canvas.addEventListener('mouseup', () => {
  mouseDown = -1;

  update = setTimeout(function() {
    socket.emit('mapUpdate', {data: map, name: name});
  }, 2000);

})

canvas.addEventListener('mousemove', e => {
  let X = Math.floor(e.offsetX/sizeX)*sizeX+thikness+0.5;
  let Y = Math.floor(e.offsetY/sizeY)*sizeY+thikness+0.5;
  let width = sizeX-(thikness*2);
  let height = sizeY-(thikness*2);
  if(mouseDown == 0) {
    let i = (Math.round((Math.floor(e.offsetX/sizeX)*sizeX*mapSize)/canvas.width));
    let j = (Math.round((Math.floor(e.offsetY/sizeY)*sizeY*mapSize)/canvas.height));
    map[i*mapSize+j] = color;
    ctx.clearRect(X, Y, width, height);
    ctx.fillStyle = color;
    ctx.fillRect(X, Y, width, height);
    socket.emit('update', {i: i, j: j, position: i*mapSize+j, color: color, map});
  } if(mouseDown == 2) {
    let i = (Math.round((Math.floor(e.offsetX/sizeX)*sizeX*mapSize)/canvas.width));
    let j = (Math.round((Math.floor(e.offsetY/sizeY)*sizeY*mapSize)/canvas.height));
    map[i*mapSize+j] = '#ffffff';
    ctx.clearRect(X, Y, width, height);
    socket.emit('update', {i: i, j: j, position: i*mapSize+j, color: '#ffffff', map});
  }
})

canvas.addEventListener('contextmenu', event => event.preventDefault());

function colorChange() {
  color = document.getElementById('color-picker').value;
}

/*window.onload = function() {
  drawGrid(bw, bh, sizeX, sizeY, thikness, ctx);
}*/