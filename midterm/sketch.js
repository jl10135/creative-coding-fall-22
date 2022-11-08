let innerHeart1;
let innerHeart2;
let innermostHeart1;
let innermostHeart2;

function setup(){
  createCanvas(800, 800);
  innerHeart1 = new Lights(400, 470, 675, 550, 215, 130, 150, 475);
  innerHeart2 = new Lights(400, 330, 125, 250, 215, 130, 150, 475);
  innermostHeart1  = new Lights(400, 500, 610, 400, 275, 170, 310, 440);
  innermostHeart2 = new Lights(400, 300, 190, 400, 275, 170, 310, 440);
}

function draw(){
  background(139, 0, 0);
  hearts();
  downstage();
  innerHeart1.displayBez();
  innerHeart2.displayBez();
  innermostHeart1.displayBez();
  innermostHeart2.displayBez();
  innermostHeart1.lightUp();
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
  strokeWeight(3);
  //innermost heart right half
  stroke(220, 20, 60);
  bezier(400, 275, 500, 170, 610, 310, 400, 440);

  //innermost heart left half
  bezier(400, 275, 300, 170, 190, 310, 400, 440);

  //

  //this heart will be split into 4 parts because it's supposed to be behind the others
  //so splitting will help with that illusion

  //inner red heart (NO LIGHTS) top right half
  bezier(400, 240, 450, 200, 540, 200, 585, 260);

  //inner red heart bottom right half
  bezier(575, 400, 550, 425, 520, 450, 420, 475);

  //inner red heart top left half
  bezier(400, 240, 350, 200, 260, 200, 215, 260);

  //inner red heart bottom left half
  bezier(225, 400, 250, 425, 280, 450, 380, 475);

  //

  //inner yellow right half
  stroke(255, 255, 0);
  bezier(400, 215, 470, 130, 675, 150, 550, 475);
  //inner yellow left half
  bezier(400, 215, 330, 130, 125, 150, 250, 475);

  //

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
    for(let i = 0; i <= increment; i += 0.6){
        let t = i / increment;
        let x = bezierPoint(this.x1, this.x2, this.x3, this.x4, t);
        let y = bezierPoint(this.y1, this.y2, this.y3, this.y4, t);
        circle(x, y, 8);
      }

  }

  lightUp(){
    noFill()
    stroke(253, 218, 13);
    strokeWeight(2);
    let increment = 10;
    for(let i = 0; i <= increment; i += 0.6){
      let t = i / increment;
      let x = bezierPoint(this.x1, this.x2, this.x3, this.x4, t);
      let y = bezierPoint(this.y1, this.y2, this.y3, this.y4, t);
      circle(x, y, 8);
      drawingContext.shadowBlur = 20;
      drawingContext.shadowColor = color(255, 234, 0);
    }
  }
}