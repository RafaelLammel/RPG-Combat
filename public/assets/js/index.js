const canvas = document.getElementById("screen");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var mapSize = 10;
var thikness = 2;
var color = 'black';
var bw = canvas.width;
var bh = canvas.height;
var sizeX = bw/mapSize;
var sizeY = bh/mapSize;

var mouseDown = -1;

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

    let i = (Math.floor((Math.floor(e.offsetX/sizeX)*sizeX*mapSize)/canvas.width));
    let j = (Math.floor((Math.floor(e.offsetY/sizeY)*sizeY*mapSize)/canvas.height));
    map[i*mapSize+j] = color;

    ctx.clearRect(X, Y, width, height);
    ctx.fillStyle = color;
    ctx.fillRect(X, Y, width, height);
  } else if(mouseDown == 2) {
    let i = (Math.floor((Math.floor(e.offsetX/sizeX)*sizeX*mapSize)/canvas.width));
    let j = (Math.floor((Math.floor(e.offsetY/sizeY)*sizeY*mapSize)/canvas.height));
    map[i*mapSize+j] = '#ffffff';
    ctx.clearRect(X, Y, width, height);
  }
})

canvas.addEventListener('mouseup', () => {
  mouseDown = -1;
})

canvas.addEventListener('mousemove', e => {
  let X = Math.floor(e.offsetX/sizeX)*sizeX+thikness+0.5;
  let Y = Math.floor(e.offsetY/sizeY)*sizeY+thikness+0.5;
  let width = sizeX-(thikness*2);
  let height = sizeY-(thikness*2);
  if(mouseDown == 0) {
    let i = (Math.floor((Math.floor(e.offsetX/sizeX)*sizeX*mapSize)/canvas.width));
    let j = (Math.floor((Math.floor(e.offsetY/sizeY)*sizeY*mapSize)/canvas.height));
    map[i*mapSize+j] = color;
    ctx.clearRect(X, Y, width, height);
    ctx.fillStyle = color;
    ctx.fillRect(X, Y, width, height);
  } if(mouseDown == 2) {
    let i = (Math.floor((Math.floor(e.offsetX/sizeX)*sizeX*mapSize)/canvas.width));
    let j = (Math.floor((Math.floor(e.offsetY/sizeY)*sizeY*mapSize)/canvas.height));
    map[i*mapSize+j] = '#ffffff';
    ctx.clearRect(X, Y, width, height);
  }
})

canvas.addEventListener('contextmenu', event => event.preventDefault());

function colorChange() {
  color = document.getElementById('color-picker').value;
}

window.onload = function() {
  drawGrid(bw, bh, sizeX, sizeY, thikness, ctx);
}