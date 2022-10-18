float x1, y1, x2, y2, o;

void setup() {
  size(800, 800);
  background(0);
  x1 = 10;
  y1 = 60;
  x2 = 30;
  y2 = 800;
  o = 10;
}

//calling all functions
void draw(){
  triangles();
  circles();
  poly();
  lines();
}

void circles(){
  //two sets of circles, one bigger, one smaller
  noFill();
  for(int i = 0; i < 260; i += 10){
    stroke(0, i * 10);
    strokeWeight(i / 10);
    circle(400, 400, i * 15);
  }
  for(int i = 0; i < 260; i += 10){
    stroke(0, i * 5);
    strokeWeight(i / 5);
    circle(400, 400, i * 10);
  }
}

//polygon function
void poly(){
  strokeWeight(2);
  //pink polygons
  for(int i = 0; i < 300; i++){
    sq(x1, y1, 240, 192, 202, o);
    x1 += 25;
    y1 += 1.5;
    o += 1;
  }
  //reset opacity & variables
  o = 0;
  x1 =10;
  y1 = 800;
  for(int i = 0; i < 300; i++){
    sq(x1, y1, 240, 192, 202, o);
    x1 += 25;
    y1 += 1.5;
    o += 1;
  }
  o = 0;
  x1 =10;
  y1 = 400;
  for(int i = 0; i < 300; i++){
    sq(x1, y1, 240, 192, 202, o);
    x1 += 25;
    y1 += 1.5;
    o += 1;
  }
  o = 0;
  x1 =10;
  y1 = 200;
  for(int i = 0; i < 300; i++){
    sq(x1, y1, 240, 192, 202, o);
    x1 += 25;
    y1 += 1.5;
    o += 1;
  }
  o = 0;
  x1 =10;
  y1 = 600;
  for(int i = 0; i < 300; i++){
    sq(x1, y1, 240, 192, 202, o);
    x1 += 25;
    y1 += 1.5;
    o += 1;
  }
  o = 0;
  x1 =10;
  y1 = 300;
  //blue polygons
  for(int i = 0; i < 50; i++){
    sq(x1, y1, 100, 192, 202, o);
      x1 += 25;
      y1 += 1.5;
      o += 1;
  }
  x1 =10;
  y1 = 500;
  o = 0;
  for(int i = 0; i < 50; i++){
    sq(x1, y1, 100, 192, 202, o);
    x1 += 25;
    y1 += 1.5;
    o += 2.5;
  }
  x1 =10;
  y1 = 700;
  o = 0;
  for(int i = 0; i < 50; i++){
    sq(x1, y1, 100, 192, 202, o);
    x1 += 25;
    y1 += 1.5;
    o += 1.5;
  }
  noLoop();
}

//misc lines
void lines(){
  stroke(0);
  strokeWeight(5);
  line(50, 700, 300, 400);
  line(750, 200, 700, 250);
  strokeWeight(3);
  line(200, 300, 300, 310);
  line(10, 20, 50, 25);
  line(475, 200, 525, 125);
  translate(100, 250);
  line(50, 700, 300, 400);
  translate(-100, -250);
  strokeWeight(7);
  line(550, 500, 760, 760);
}

//white triangles
void triangles(){
  noStroke();
  fill(200, 200, 200);
  beginShape();
  vertex(-150, 150);
  vertex(800, 800);
  vertex(150, -150);
  endShape(CLOSE);
}

//function to draw each individual polygon
void sq(float x, float y, int r, int b, int g, float opacity){
  stroke(r + 10, g, b);
  fill(r, g, b, opacity);
  beginShape();
  vertex(x, y);
  vertex(x + 130, y + 30);
  vertex(x + 150, y - 120);
  vertex(x, y - 100);
  endShape(CLOSE);
}

