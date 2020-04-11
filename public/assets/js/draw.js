function drawRect(e, sizeX, sizeY, color, thikness, ctx) {
  ctx.fillStyle = color;
  ctx.fillRect(Math.floor(e.offsetX/sizeX)*sizeX+thikness+0.5, 
              Math.floor(e.offsetY/sizeY)*sizeY+thikness+0.5,
              sizeX-(thikness*2)+0.5, sizeY-(thikness*2)+0.5);
}

function clearRect(e, sizeX, sizeY, thikness, ctx) {
  ctx.clearRect(Math.floor(e.offsetX/sizeX)*sizeX+thikness+0.5, 
                Math.floor(e.offsetY/sizeY)*sizeY+thikness+0.5,
                sizeX-(thikness*2), sizeY-(thikness*2));
}

function drawGrid(bw, bh, sizeX, sizeY, thikness, ctx) {
  
  for (var x = 0; x <= bw; x += sizeX) {
    ctx.moveTo(x, 0);
    ctx.lineTo(x, bh);
  }

  for (var y = 0; y <= bh; y += sizeY) {
    ctx.moveTo(0, y);
    ctx.lineTo(bw, y);
  }
  
  ctx.strokeStyle = "black";
  ctx.lineWidth = thikness;
  ctx.stroke();

}