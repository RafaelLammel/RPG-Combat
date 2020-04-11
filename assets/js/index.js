window.onload = function() {
  const canvas = document.getElementById("screen");
  const ctx = canvas.getContext("2d");
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  var mapSize = 20;
  var bw = canvas.width;
  var bh = canvas.height;
  var sizeX = bw/mapSize;
  var sizeY = bh/mapSize;

  window.addEventListener('resize', function() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    bw = canvas.width;
    bh = canvas.height;
    sizeX = bw/mapSize;
    sizeY = bh/mapSize;
    drawGrid();
  });


  function drawGrid() {
  
    for (var x = 0; x <= bw; x += sizeX) {
      ctx.moveTo(0.5 + x, 0);
      ctx.lineTo(0.5 + x, bh);
    }

    for (var y = 0; y <= bh; y += sizeY) {
      ctx.moveTo(0, 0.5 + y);
      ctx.lineTo(bw, 0.5 + y);
    }
    
    ctx.strokeStyle = "black";
    ctx.stroke();

  }

  drawGrid();

}