// let x;
// let y;
// let xspeed;
// let yspeed;
// let x_acc;
// let y_acc;

let position;
let velocity;

function setup() {
  createCanvas(800, 800);
  background(0);

  // x = 100;
  // y = 100;
  // xspeed = 2.5;
  // yspeed = 2;

  position = createVector(100, 100);

}

function draw() {
  background(0);

  // x += xspeed;
  // y += yspeed;

  position.add(velocity);

  // if((x > width) || (x < 0)){
  //   xspeed = xpeed * -1;
  // }
  // if((y > height) || (y < 0)){
  //   yspeed = yspeed * -1;
  // }

  if((position.x > width) || position.x < 0){
    velocity.x *= -1;
  }
  if((position.y > height) || position.y < 0){
    velocity.y *= -1;
  }

  stroke(0);
  strokeWeight(2);
  fill(127);
  ellipse(position.x, position.y, 50, 50);
  

}

// function mousePressed(){
//   //letTest()

// }





