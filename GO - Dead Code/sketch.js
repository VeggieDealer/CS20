var board = [];
var click = false;
var tile = {
  x: NaN,
  y: NaN
};
var player = 1;

function setup() {

  createCanvas(1200, 1200);
  background("white");

  for (x = 0; x < 19; x++) {
    board.push([]);
    for (y = 0; y < 19; y++) {
      board[x].push(0);
    }

  }


  console.log(board);
}

function draw() {
  strokeWeight(2);
  stroke(0);
  fill("brown");
  for (var f = 0; f < 19; f++) {
    for (var b = 0; b < 19; b++) {
      fill(139,69,19);
      rect(f * 60 + 30, b * 60 + 30, 60, 60);
      if (board[f][b] == 1) {
        fill(139,69,19);
        rect(f * 60 + 30, b * 60 + 30, 60, 60);
        fill(255);
        ellipse(f * 60 + 30, b * 60 + 30, 60, 60);
      } else if (board[f][b] == 2) {
        fill(139,69,19);
        rect(f * 60 + 30, b * 60 + 30, 60, 60);
        fill(0);
        ellipse(f * 60 + 30, b * 60 + 30, 60, 60);
      }
    }

  }
detectTile();

}

function mousePressed () {
  for(var f = 0; f < 19; f ++) {
    for(var b = 0; b < 19; b ++) {
      if (mouseX > f * 60 && mouseX < f * 60 + 60 && mouseY > b * 60 && mouseY < b * 60 + 60 && player == 1 && board[f][b] !== 2) {
        board[f][b] = 1;
        player = player * -1
      } else if (mouseX > f * 60 && mouseX < f * 60 + 60 && mouseY > b * 60 && mouseY < b * 60 + 60 && player == -1 && board[f][b] !== 1) {
        board[f][b] = 2;
        player = player *-1;
      }
    }
  }
}


function detectTile() {


  for (var i = 0; i < 15; i++) {
    if (mouseX > 0 && mouseX < 900 && mouseX > i * 60) {
      tile.x = i;
    }
    if (mouseY > 0 && mouseY < 900 && mouseY > i * 60) {
      tile.y = i;
    }
  }
  return tile;
}
