function drawGrid(bw, bh, sizeX, sizeY, thikness, ctx) {
  
  for (let x = 0; x <= bw; x += sizeX) {
    ctx.moveTo(x, 0);
    ctx.lineTo(x, bh);
  }

  for (let y = 0; y <= bh; y += sizeY) {
    ctx.moveTo(0, y);
    ctx.lineTo(bw, y);
  }

  let width = sizeX-(thikness*2);
  let height = sizeY-(thikness*2);

  for(let i = 0; i <= 10; i++ ) {
    for(let j = 0; j <= 10; j++) {
      ctx.fillStyle = map[i*mapSize+j];
      ctx.fillRect((i*sizeX)+thikness+0.5, (j*sizeY)+thikness+0.5, width, height);
    }
  }

  ctx.strokeStyle = "black";
  ctx.lineWidth = thikness;
  ctx.stroke();

}