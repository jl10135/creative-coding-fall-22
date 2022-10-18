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

public class sketch_2_final extends PApplet {

//jamie lee - sketch 2
//initialize pattern number (out of 20)
int pattern = 1;
float angle;
int xPos, yPos, sRan, cRan;

 public void setup(){
    /* size commented out by preprocessor */;
}

 public void draw(){
    background(0);
    stroke(255);
    frameRate(60);
    if(pattern == 1){
        patternOne();
    }
    else if(pattern == 2){
        patternTwo();
    }
    else if(pattern == 3){
        noCursor();
        patternThree();
    }
    else if(pattern == 4){
        patternFour();
    }
    else if(pattern == 5){
        patternFive();
    }
}

 public void mousePressed(){
    pattern++;
    if(pattern > 5){
        pattern = 1;
    }
}

//base stamp
 public void stamp(int x, int y, float s){
  strokeWeight(s);
  line(20 + x, 20 + y, 40 + x, 20 + y);
  line(20 + x, 40 + y, 40 + x, 40 + y);
  line(20 + x, 20 + y, 40 + x, 40 + y);
  line(40 + x, 20 + y, 20 + x, 40 + y);
}

//pattern 1
 public void patternOne(){
    int x1 = 60;
    for(int j = 75; j < 700; j += 525){
        for(int i = 50; i <= width - 120; i += 20){
            stamp(10 + i, j, 1.5f);
        }
    }
    for(int j = 60; j < 600; j += 20){
        stamp(x1, j, 1.5f);
        x1 += 23;
    }
    //reinitialize
    x1 = 60;
    for(int j = 600; j > 60; j -= 20){
        stamp(x1, j, 1.5f);
        x1 += 23;
    }
}

 public void patternTwo(){
    for(int j = 50; j <= width - 100; j += 30){
        for(int i = 50; i <= width - 100; i += 40){
            stroke(PApplet.parseInt(random(255)), PApplet.parseInt(random(255)), PApplet.parseInt(random(255)));
            stamp(j, i, 2);
        }
    }
}

 public void patternThree(){
    for(int j = 50; j <= width - 100; j += 50){
        for(int i = 50; i <= width - 100; i += 50){
            stroke(255 - mouseX, pmouseX, mouseY);
            stamp(j, i, 1);
        }
    }
    for(int j = 10; j <= width - 500; j += 100){
        stroke(mouseY, 200, mouseX);
        stamp(mouseY, mouseX, 3);
        stamp(mouseX, mouseY, 3);
        rotate(HALF_PI);
    }
}

 public void patternFour(){
    translate(400, 400);
    for(int j = 0; j < 10; j++){
        rotate(radians(angle));
        for(int i = 1; i < 100; i += 10){
            stroke(PApplet.parseInt(random(50, 250)));
            stamp(i * j, i * j, PApplet.parseInt(random(1, 5)));
        }
    }
    angle += 0.5f;
}

 public void patternFive(){
    frameRate(10);
    for(int j = 0; j < 300; j++){
        xPos = PApplet.parseInt(random(800));
        yPos = PApplet.parseInt(random(800));
        sRan = PApplet.parseInt(random(4));
        cRan = PApplet.parseInt(random(255));
        stroke(cRan);
        translate(xPos, yPos);
        stamp(PApplet.parseInt(random(20)), PApplet.parseInt(random(20)), sRan);
    }
}


  public void settings() { size(800, 800); }

  static public void main(String[] passedArgs) {
    String[] appletArgs = new String[] { "sketch_2_final" };
    if (passedArgs != null) {
      PApplet.main(concat(appletArgs, passedArgs));
    } else {
      PApplet.main(appletArgs);
    }
  }
}
