const canvas = document.getElementById("screen");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var thikness = 2;
var color = 'black';
var bw = canvas.width;
var bh = canvas.height;
var sizeX = bw/mapSize;
var sizeY = bh/mapSize;

var mouseDown = -1;
var update;
var map;