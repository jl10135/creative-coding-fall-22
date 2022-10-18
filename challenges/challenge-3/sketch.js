// let lighthouse;
// let sunrayOne;
// let sunrayTwo;
// let sunray;
let circleOne;
let circleTwo;
let circleThree;
let circleFour;
let circleFive;

let boatOne;

function setup() {
  createCanvas(800, 800);
  background(255);

  //switched from classes to function bc they're not being altered

  // lighthouse = new Lighthouse();
  // sunrayOne = new Sunray(0, 300, 0, 200);
  // sunrayTwo = new Sunray(800, 200, 800, 100);
  // sunray = new Sunrays();
  circleOne = new Circle(100, 600, 100);
  circleTwo = new Circle(550, 500, 125);
  circleThree = new Circle(0, 0, 150, 1);
  circleFour = new Circle(700, 200, 200, 1);
  circleFive = new Circle(650, 700, 140, 1.5);

  boatOne = new Boat(600, 600, 2);
}

function draw() {

  //init background, lighthouse, sunrays
  bg();
  lighthouse();
  // sunrayOne.display()
  // sunrayTwo.display()
  sunrays();

  //static circles
  circleOne.display(255, 0, 0);
  circleTwo.display(255, 255, 255);

  //dynamic circles w/ movement
  circleThree.display(0, 0, 255);
  circleThree.move(2, 1);

  circleFour.display(100, 210, 60);
  circleFour.move(5, 0);

  circleFive.display(138, 222, 209);
  circleFive.move(-3, -2);

  //boat
  boatOne.display(255, 0, 255);
  boatOne.move(1);
  
}

//4 square background setup
function bg(){
  noStroke();
  fill(108, 172, 204);
  rect(0, 0, 400, 400); //top left
  fill(48, 160, 217);
  rect(0, 400, 400, 400); //bottom left
  fill(37, 107, 143);
  rect(400, 0, 400, 400); //top right
  fill(182, 228, 252);
  rect(400, 400, 400, 400); //bottom right
}

function lighthouse(){
    // lighthouse
    strokeWeight(1);
    fill(0,0,0);
    beginShape();
      vertex(280,800);
      vertex(350,450);
      vertex(300,450);
      vertex(320,420);
      vertex(320,380);
      vertex(300,340);
      vertex(400,310);
      vertex(500,340);
      vertex(480,380);
      vertex(480,420);
      vertex(500,450);
      vertex(450,450);
      vertex(520,800);
    endShape();

    // windows
    fill(255,255,0,80);
    rect(330,380,40,40);
    rect(380,380,40,40);
    rect(430,380,40,40);
    rect(410,500,30,50);
    rect(350,550,30,50);
    rect(380,630,30,50);
}

function sunrays(){

  // constructor(x1, y1, x2, y2){
  //   this.x1 = x1;
  //   this.y1 = y1;
  //   this.x2 = x2;
  //   this.y2 = y2;
  // }

  // display(){
  //   fill(255,255,0,50);
  //   stroke(255,255,0);
  //   beginShape();
  //     vertex(this.x1 , this.y1);
  //     vertex(400,400);
  //     vertex(this.x2 , this.y2);
  //   endShape();
  // }

  strokeWeight(1);

  fill(255,255,0,50);
  stroke(255,255,0);
  beginShape();
    vertex(0,300);
    vertex(400,400);
    vertex(0,200);
  endShape();
  beginShape();
    vertex(200,0);
    vertex(400,400);
    vertex(250,0);
  endShape();
  beginShape();
    vertex(450,0);
    vertex(400,400);
    vertex(575,0);
  endShape();
  beginShape();
    vertex(800,200);
    vertex(400,400);
    vertex(800,100);
  endShape();
  beginShape();
    vertex(0,550);
    vertex(400,400);
    vertex(0,600);
  endShape();
  beginShape();
    vertex(0,700);
    vertex(400,400);
    vertex(0,750);
  endShape();
  beginShape();
    vertex(650,800);
    vertex(400,400);
    vertex(750,800);
  endShape();
  beginShape();
    vertex(800,630);
    vertex(400,400);
    vertex(800,530);
  endShape();
}

class Circle{

  //d for diameter, s for speed
  constructor(x, y, d, s){
    this.x = x;
    this.y = y;
    this.d = d;
    this.s = s;
  }

  //colors for circles can be altered
  display(r, g, b){
    strokeWeight(1);
    fill(r, g, b, 50);
    stroke(r, g, b);
    circle(this.x, this.y, this.d);
  }

  //movement affected by both increment and speed
  move(moveX, moveY){
    this.x += moveX * this.s;
    this.y += moveY * this.s;

    if(this.x > width){
      this.x = 0;
    }
    else if(this.x < 0){
      this.x = width;
    }

    if(this.y > height){
      this.y = 0;
    }
    else if(this.y < 0){
      this.y = height;
    }

  }
}

class Boat{

  //all necessary points for the boat
  constructor(x, y, s){
    this.x = x;
    this.y = y;
    this.s = s;
  }

  display(r, g, b){
    noStroke();
    fill(r, g, b);
    triangle(this.x, this.y, this.x, this.y + 100, this.x + 50, this.y + 50);
    quad(this.x - 50,this.y + 100, this.x + 80, this.y + 130, this.x + 50, this.y + 200, this.x - 20, this.y + 200);
    stroke(r, g, b);
    strokeWeight(3);
    line(this.x, this.y, this.x, this.y + 200);
  }

  move(moveX){
    this.x += moveX * this.s;

    if(this.x > width){
      this.x = 0;
    }
    else if(this.x < 0){
      this.x = width;
    }
  }

}