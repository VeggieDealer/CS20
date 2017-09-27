var runling = {
  x: 10,
  y: 10,
  xSpeed: 0.5,
  ySpeed: 0.5,
}
var runlingMove = false;
var runlingDestination = {
  x: 0,
  y: 0
}

drones = [];
baseDrone = {
  x: 0,
  y: 0,
  r: 10,
  xMove: 2,
  yMove: 2
}
var droneNumber = 0;

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



  if (droneNumber < 20 ) {
      drones.push(Object.assign({}, baseDrone));
      drones[drones.length - 1].x = random(75, 950);
      drones[drones.length - 1].y = random(0, 70);
      droneNumber ++;
  }

  for (i = 0; i < drones.length; i ++) {
    ellipse(drones[i].x, drones[i].y, drones[i].r);

    if (dist(runling.x, runling.y, drones[i].x, drones[i].y) < drones[i].r) {
      runling.x = 10;
      runling.y = 10;
      runlingMove = false;
    }
  }

  if (runlingMove) {
    if(runling.x < runlingDestination.x) {
      runling.x += runling.xSpeed;
    } else if (runling.x > runlingDestination.x) {
      runling.x -= runling.xSpeed;
    }
    if (runling.y < runlingDestination.y) {
      runling.y += runling.ySpeed;
    } else if (runling.y > runlingDestination.y) {
      runling.y -= runling.ySpeed;
    }
  }
}

function mousePressed() {
  runlingMove = true;
  runlingDestination.x = mouseX;
  runlingDestination.y = mouseY;
}
