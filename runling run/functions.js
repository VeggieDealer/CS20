function drawMap() {
  strokeWeight(10);
  stroke(0);
  line(0, 100, 1375, 100);
  line(1375, 100, 1375, 1200);
  line(1375, 1200, 100, 1200);
  line(100, 1200, 100, 200);
  line(100, 200, 1250, 200);
  line(1250, 200, 1250, 1100);
  line(1250, 1100, 200, 1100);
  line(200, 1100, 200, 300);
  line(200, 300, 1150, 300);
  line(1150, 300, 1150, 1025);
  line(1150, 1025, 300, 1025);
  line(300, 1025, 300, 375);
  line(300, 375, 1050, 375);
  line(1050, 375, 1050, 950);
  line(1050, 950, 400, 950);
  line(400, 950, 400, 475);
  line(400, 475, 950, 475);
  line(950, 475, 950, 850);
  line(950, 850, 500, 850);
  line(500, 850, 500, 550);
  line(500, 550, 850, 550);
  line(850, 550, 850, 775);
  line(850, 775, 600, 775);
  line(600, 775, 600, 650)
}

function drawCharacter() {
  stroke("blue")
  strokeWeight(1);
  fill("blue");
  ellipse(runling.position.x, runling.position.y, 4);

}

function boundaries() {
  //checking which lane the character is in

  if (runling.x > 0 && runling.x < width - 122 && runling.y > 0 && runling.y < 90) {
    lane = 1;
  } else if (runling.x > 1300 && runling.x < width && runling.y > 0 && runling.y < length) {
    lane = 2;
  }







  //boundaries
  if (runling.x <= 5) {
    runling.x = 5;
  }
  if (runling.y <= 5) {
    runling.y = 5;
  }
  if (runling.y > 90 && runling.y < 101 && lane == 1) {
    runling.y = 90;
  }
}
