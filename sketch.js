var x;
var xSpeed = 1;

function setup() {
  createCanvas(400, 400);
  x = width/2;
}

function draw() {
  background(220);
  circle(x, height/2, 24);
  x+=xSpeed
  if(x > width - 12 || x < 12) xSpeed += -1;
}
