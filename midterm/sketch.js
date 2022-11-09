let innerHeart1;
let innerHeart2;
let innermostHeart1;
let innermostHeart2;
let outerHeart1;
let outerHeart2;
let scene;

function setup(){
  createCanvas(800, 800);
  innerHeart1 = new Lights(400, 470, 675, 550, 215, 130, 150, 475);
  innerHeart2 = new Lights(400, 330, 125, 250, 215, 130, 150, 475);
  innermostHeart1  = new Lights(400, 500, 610, 400, 275, 170, 310, 440);
  innermostHeart2 = new Lights(400, 300, 190, 400, 275, 170, 310, 440);
  outerHeart1 = new Lights(400, 580, 750, 600, 175, 75, 100, 475);
  outerHeart2 = new Lights(400, 220, 50, 200, 175, 75, 100, 475);


  //add glow effect! utilizes html canvas functionality
  drawingContext.shadowBlur = 20;
  drawingContext.shadowColor = color(255, 234, 0);
}

function draw(){
  background(129, 19, 20);
  // text(frameCount, width / 2, height /2);
  hearts();
  downstage();
  pillarsRoof();
  lightsOff();

  if(key == '1'){
    scene = 1;
    sceneOne();
  }
  else if(key == '2'){
    scene = 2;
    sceneTwo();
  }
  else if(key == '3'){
    scene = 3;
    sceneThree();
  }

  // if(mouseIsPressed){
  //   innerHeart1.lightUp();
  //   innerHeart2.lightUp();
  //   innermostHeart1.lightUp();
  //   innermostHeart2.lightUp();
  // }

  // if(frameCount % 120 < 60){
  //   reset();
  //   lightsOff();
  // }


}

function sceneOne(){
  // textSize(30);
  // text(frameCount, width / 2, height / 2);
   if(frameCount % 120 < 60){
    innermostHeart1.lightUp();
    innermostHeart2.lightUp();
    innerHeart1.lightUp();
    innerHeart2.lightUp();
    outerHeart1.lightUp();
    outerHeart2.lightUp();
  }
}

function sceneTwo(){
  if(mouseIsPressed){
    innermostHeart1.lightUp();
    innermostHeart2.lightUp();
    innerHeart1.lightUp();
    innerHeart2.lightUp();
    outerHeart1.lightUp();
    outerHeart2.lightUp();
  }
}

function sceneThree(){
  let seconds = round(millis()/1000);
  console.log(seconds);
  if(seconds % 2 == 0){
    innermostHeart1.lightUp();
    innermostHeart2.lightUp();
    if(seconds % 2 == 0 && seconds % 3 == 0){
      innerHeart1.lightUp();
      innerHeart2.lightUp();
      if(seconds % 2 == 0 && seconds % 3 == 0 && seconds % 4 == 0){
        outerHeart1.lightUp();
        outerHeart2.lightUp();
      }
    }
  }
}

function downstage(){
  //stage fill
  fill(27, 18, 18);
  noStroke();
  quad(0, 475, 800, 475, 800, 575, 0, 575);

  //catwalk
  beginShape();
  fill(215, 0, 0);
  vertex(380, 575);
  vertex(420, 575);
  stroke(255, 0, 0);
  vertex(440, 677);
  bezierVertex(490, 680, 600, 665, 800, 650);
  noStroke();
  vertex(800, 725);
  stroke(255, 0, 0);
  bezierVertex(450, 760, 350, 760, 0, 725);
  noStroke();
  vertex(0, 650);
  stroke(255, 0, 0);
  bezierVertex(200, 664, 310, 680, 360, 677);
  vertex(380, 575);
  endShape();

  //two thicker red lines for detail & dimension
  strokeWeight(6);
  stroke(255, 49, 49);
  line(390, 577, 375, 672);
  line(410, 577, 425, 672);

  //downstage red lines
  stroke(255, 0, 0);
  strokeWeight(3);
  line(0, 575, 380, 575);
  line(420, 575, 800, 575);
  
  //yellow lining
  stroke(255, 255, 0);
  line(50, 570, 750, 570);
  line(0, 475, 800, 475);

  strokeWeight(5);
  bezier(443, 672, 490, 675, 600, 660, 800, 645);
  bezier(357, 672, 310, 675, 200, 660, 0, 645);
  bezier(0, 727, 355, 765, 455, 765, 800, 727);
}

function hearts(){

  //outer yellow heart (same shape but scaled)
  push();
  stroke(255, 255, 0);
  strokeWeight(2.5);
  scale(1.2);
  translate(-66, -50);
  fill(210, 5, 15);
  beginShape();
  vertex(400, 175);
  bezierVertex(580, 75, 750, 100, 600, 475);
  vertex(200, 475);
  bezierVertex(50, 100, 220, 75, 400, 175);
  endShape();
  noFill();
  pop();
  
  // outer red heart
  stroke(225, 20, 60);
  strokeWeight(2.5);
  fill(140, 0, 20);
  beginShape();
  vertex(400, 175);
  bezierVertex(580, 75, 750, 100, 600, 475);
  vertex(200, 475);
  bezierVertex(50, 100, 220, 75, 400, 175);
  endShape();
  noFill();
 
   //

  //inner red heart NO LIGHTS (starts from top right and goes clockwise)
  strokeWeight(4.5);
  stroke(220, 20, 60);

  fill(110, 0, 0);
  beginShape();
  vertex(400, 240);
  bezierVertex(450, 200, 540, 200, 585, 260);
  bezierVertex(590, 300, 590, 325, 575, 400);
  bezierVertex(550, 425, 520, 450, 420, 475);

  //bottom corner of heart (to keep it centered)
  vertex(380, 475);

  bezierVertex(280, 450, 250, 425, 225, 400);
  bezierVertex(210, 300, 210, 325, 215, 260);
  bezierVertex(260, 200, 350, 200, 400, 240);
  endShape();  
  noFill();

  //

  //innermost red (complete) heart
  strokeWeight(2);
  stroke(220, 20, 60);

  fill(80, 0, 0);
  beginShape();
  vertex(400, 275);
  bezierVertex(500, 170, 610, 310, 400, 440);
  bezierVertex(190, 310, 300, 170, 400, 275);
  endShape();
  noFill();

  //

  //innermost yellow heart
  strokeWeight(2);
  stroke(255, 255, 0);

  beginShape();
  vertex(400, 215);
  bezierVertex(470, 130, 675, 150, 550, 475);
  vertex(250, 475);
  bezierVertex(125, 150, 330, 130, 400, 215);
  endShape();

  //




}

function pillarsRoof(){
  stroke(255, 191, 0);
  strokeWeight(4);

  //left pillar base
  beginShape();
  vertex(0, 500);
  vertex(115, 500);
  vertex(115, 440);
  vertex(0, 440);
  endShape();

  //right pillar base
  beginShape();
  vertex(800, 500);
  vertex(685, 500);
  vertex(685, 440);
  vertex(800, 440);
  endShape();

  //right pillar
  fill(165, 42, 42);
  beginShape();
  vertex(730, 440);
  vertex(730, 0);
  vertex(810, 0);
  vertex(810, 440);
  endShape();

  //left pillar
  beginShape();
  vertex(70, 440);
  vertex(70, 0);
  vertex(-10, 0);
  vertex(-10, 440);
  endShape();

  //ceiling/roof
  fill(215, 0, 0);
  beginShape();
  vertex(0, 90);
  bezierVertex(100, 90, 120, 100, 150, 50);
  vertex(650, 50);
  bezierVertex(680, 100, 700, 90, 800, 90);
  vertex(800, 0);
  vertex(0, 0);
  endShape();

}

//resets base
function reset(){
  background(139, 0, 0);
  hearts();
  downstage();
  pillarsRoof();
}

function lightsOff(){
  innerHeart1.displayBez();
  innerHeart2.displayBez();
  innermostHeart1.displayBez();
  innermostHeart2.displayBez();
  outerHeart1.displayBez();
  outerHeart2.displayBez();
}

class Lights{
  constructor(x1, x2, x3, x4, y1, y2, y3, y4){
    this.x1 = x1;
    this.x2 = x2;
    this.x3 = x3;
    this.x4 = x4;
    this.y1 = y1;
    this.y2 = y2;
    this.y3 = y3;
    this.y4 = y4; 
  }

  displayBez(){
    noFill()
    stroke(253, 218, 13);
    strokeWeight(1.5);
    let increment = 10;
    for(let i = 0; i <= increment; i += 0.8){
        let t = i / increment;
        let x = bezierPoint(this.x1, this.x2, this.x3, this.x4, t);
        let y = bezierPoint(this.y1, this.y2, this.y3, this.y4, t);
        circle(x, y, 9);
      }

  }

  lightUp(){
    noFill();
    stroke(253, 218, 13);
    strokeWeight(4);
    let increment = 10;
    for(let i = 0; i <= increment; i += 0.8){
      let t = i / increment;
      let x = bezierPoint(this.x1, this.x2, this.x3, this.x4, t);
      let y = bezierPoint(this.y1, this.y2, this.y3, this.y4, t);
      fill(253, 218, 13);
      circle(x, y, 10);
      noFill();
    }
  }

}