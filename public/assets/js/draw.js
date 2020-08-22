function drawGrid(bw, bh, sizeX, sizeY, thikness, ctx) {
  
  ctx.clearRect(0, 0, canvas.width, canvas.height);

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
  
  let s = map == undefined ? mapSize : map.length
  for(let i = 0; i <= s; i++ ) {
    for(let j = 0; j <= s; j++) {
      ctx.fillStyle = map == undefined ? '#ffffff' : map[i*mapSize+j];
      ctx.fillRect((i*sizeX)+thikness+0.5, (j*sizeY)+thikness+0.5, width, height);
    }
  }

  ctx.strokeStyle = "black";
  ctx.lineWidth = thikness;
  ctx.stroke();

}