var runling = {
  x: 10,
  y: 10,
  xSpeed: 1,
  ySpeed: 1,
}


// SETUP FUNCTION - Runs once at beginning of program
function setup() {
  createCanvas(1200, 1000);
}

// DRAW FUNCTION - Loops @ 60FPS by default
function draw() {
  background(200, 200, 200);
  fill(200, 200, 200);
  drawMap();
  drawCharacter();
}

function mousePressed() {
  if (runling.x < mouseX) {
    runling.x += runling.xSpeed;
  } else if (runling.x > mouseX)  {
    runling.x += runling.xSpeed*-1;
  }
  if (runling.y < mouseY) {
    runling.y += runling.ySpeed;
  } else if (runling.x > mouseY)  {
    runling.y += runling.ySpeed*-1;
  }
}
