function drawMap() {
  strokeWeight(4);
  stroke(0);
  line(0, 75, 1125, 75);
  line(1125, 75, 1125, 925);
  line(1125, 925, 75, 925);
  line(75, 925, 75, 125);
  line(75, 125, 1060, 125);
  line(1060, 125, 1060, 875);
  line(1060, 875, 150, 875);
  line(150, 875, 150, 190);
  line(150, 190, 990, 190);
  line(990, 190, 990, 800);
  line(990, 800, 210, 800);
  line(210, 800, 210, 250);
  line(210, 250, 925, 250);
  line(925, 250, 925, 750);
  line(925, 750, 275, 750);
  line(275, 750, 275, 300);
  line(275, 300, 850, 300);
  line(850, 300, 850, 675);
  line(850,675,350,675);
  line(350,675,350,375);
  line(350,375,775,375);
  line(775,375,775,600);
  line(775,600,425,600);
  line(425,600,425,425)
}
function drawCharacter() {
  ellipse(runling.x, runling.y, 5,5);

}