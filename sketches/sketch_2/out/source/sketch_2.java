/* autogenerated by Processing revision 1286 on 2022-10-12 */
import processing.core.*;
import processing.data.*;
import processing.event.*;
import processing.opengl.*;

import java.util.HashMap;
import java.util.ArrayList;
import java.io.File;
import java.io.BufferedReader;
import java.io.PrintWriter;
import java.io.InputStream;
import java.io.OutputStream;
import java.io.IOException;

public class sketch_2 extends PApplet {

int x, y;

 public void setup(){
  /* size commented out by preprocessor */;
  /* smooth commented out by preprocessor */;
}

 public void myCluster(int x, int y, int s){
  strokeWeight(s);
  line(50 + x, 50 + y, 100 + x, 50 + y);
  line(50 + x, 100 + y, 100 + x, 100 + y);
  line(50 + x, 50 + y, 100 + x, 100 + y);
  line(100 + x, 50 + y, 50 + x, 100 + y);
}

 public void draw(){
  //myCluster(20, 40, 2, 120, 154, 30);
  //myCluster(100, 52, 1, 30, 10, 3);
  //myCluster(72, 124, 8, 260, 168, 192);
  for (int i = 0; i < 10; i++){
    myCluster(i*0, i*125, (int)random(10));
}
}


  public void settings() { size(500, 500);
smooth(); }

  static public void main(String[] passedArgs) {
    String[] appletArgs = new String[] { "sketch_2" };
    if (passedArgs != null) {
      PApplet.main(concat(appletArgs, passedArgs));
    } else {
      PApplet.main(appletArgs);
    }
  }
}
