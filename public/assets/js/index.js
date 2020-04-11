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
  if(mouseDown == 0) {
    clearRect(e, sizeX, sizeY, thikness, ctx);
    drawRect(e, sizeX, sizeY, color, thikness, ctx);
  } if(mouseDown == 2) {
    clearRect(e, sizeX, sizeY, thikness, ctx);
  }
})

canvas.addEventListener('mouseup', () => {
  mouseDown = -1;
})

canvas.addEventListener('mousemove', e => {
  if(mouseDown == 0) {
    clearRect(e, sizeX, sizeY, thikness, ctx);
    drawRect(e, sizeX, sizeY, color, thikness, ctx);
  } if(mouseDown == 2) {
    clearRect(e, sizeX, sizeY, thikness, ctx);
  }
})

canvas.addEventListener('contextmenu', event => event.preventDefault());

function colorChange() {
  color = document.getElementById('color-picker').value;
}

window.onload = function() {
  drawGrid(bw, bh, sizeX, sizeY, thikness, ctx);
}