int x, y;

void setup(){
  size(500, 500);
  smooth();
}

void myCluster(int x, int y, int s){
  strokeWeight(s);
  line(50 + x, 50 + y, 100 + x, 50 + y);
  line(50 + x, 100 + y, 100 + x, 100 + y);
  line(50 + x, 50 + y, 100 + x, 100 + y);
  line(100 + x, 50 + y, 50 + x, 100 + y);
}

void draw(){
  //myCluster(20, 40, 2, 120, 154, 30);
  //myCluster(100, 52, 1, 30, 10, 3);
  //myCluster(72, 124, 8, 260, 168, 192);
  for (int i = 0; i < 10; i++){
    myCluster(i*0, i*125, (int)random(10));
}
}
