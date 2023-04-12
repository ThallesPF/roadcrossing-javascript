//função background
function setup() {
  createCanvas(800, 500);
}
//função load
function draw() {
  background(imageRoad);
  drawCaracter();
  drawCar();
  moveCar();
  backToBegin();
  moveCaracter();
  verifeColision();
  showPoints();
  addPoints();
}
