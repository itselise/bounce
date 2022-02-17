var x = 200;
var y = 12.1;
var xSpeed = 0;
var ySpeed = 1;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  circle(x, y, 24);
  y +=ySpeed;
  x += xSpeed;
  if(y > height - 12 || y < 12) ySpeed *= -1;
  if(x > width - 12 || x < 12) xSpeed *= -1;
}
