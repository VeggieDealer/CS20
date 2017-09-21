var board = [];
var click = false;
var tile = {
  x: NaN,
  y: NaN
};
var player = 1;
var capture = false;
var blackCapture = 0;
var whiteCapture = 0;


function setup() {


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
  createCanvas(1400, 1200);
  strokeWeight(2);
  stroke(0);
  fill("brown");
  for (var f = 0; f < 19; f++) {
    for (var b = 0; b < 19; b++) {
      fill(139, 69, 19);
      rect(f * 60 + 30, b * 60 + 30, 60, 60);
      if (board[f][b] == 1) {
        fill(139, 69, 19);
        rect(f * 60 + 30, b * 60 + 30, 60, 60);
        fill(255);
        ellipse(f * 60 + 30, b * 60 + 30, 60, 60);
      } else if (board[f][b] == 2) {
        fill(139, 69, 19);
        rect(f * 60 + 30, b * 60 + 30, 60, 60);
        fill(0);
        ellipse(f * 60 + 30, b * 60 + 30, 60, 60);
      }
    }

  }

  fill(0);
  stroke(255);
  textSize(30);
  text("Black Captures", 1190, 300);
  text(blackCapture, 1275, 350);

  text("White Captures", 1190, 400);
  text(whiteCapture, 1275, 450);



  if (capture == false) {
    stroke(0);
    fill("grey");
    rect(1200, 30, 150, 150);
    stroke(255);
    fill("black");
    textSize(28);
    text("CAPTURE", 1210, 110);

  } else if (capture) {
    stroke(0);
    fill("grey");
    rect(1200, 30, 150, 150);
    stroke(255);
    fill("black");
    textSize(28);
    text("Place", 1240, 110);

  }
}

function mousePressed() {
  for (var f = 0; f < 19; f++) {
    for (var b = 0; b < 19; b++) {
      if (!capture && mouseX > f * 60 && mouseX < f * 60 + 60 && mouseY > b * 60 && mouseY < b * 60 + 60 && player == 1 && board[f][b] !== 2) {
        board[f][b] = 1;
        player = player * -1
      } else if (!capture && mouseX > f * 60 && mouseX < f * 60 + 60 && mouseY > b * 60 && mouseY < b * 60 + 60 && player == -1 && board[f][b] !== 1) {
        board[f][b] = 2;
        player = player * -1;
      }
    }
  }

  if (mouseX > 1200 && mouseX < 1350 && mouseY > 30 && mouseY < 180) {
    if (capture) {
      capture = false;
    } else if (!capture) {
      capture = true;
    }
  }


  if (capture) {
    for (var f = 0; f < 19; f++) {
      for (var b = 0; b < 19; b++) {
        if (mouseX > f * 60 && mouseX < f * 60 + 60 && mouseY > b * 60 && mouseY < b * 60 + 60 && board[f][b] == 2) {
          board[f][b] = 0;
          whiteCapture ++;
        } else if (mouseX > f * 60 && mouseX < f * 60 + 60 && mouseY > b * 60 && mouseY < b * 60 + 60 && board[f][b] == 1) {
          board[f][b] = 0;
          blackCapture ++;
        }

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
