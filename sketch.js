let capture;
let vid; //variable to store the video drawing to canavs
//webcam gets activate when video2 and video4 play 
let wheight =1;
let wwidth=1;
let wx=0;
let wy=0;


function preload() {
  video1 = createVideo('ZOOM_OUT_final.mp4', vidplay);                     
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  capture = createCapture(VIDEO);
  capture.size(400, 300);// size of webcam view
  capture.hide();
  video1.addCue(30.8, webcamA);//call the funtion changeVideo below after 31 seconds into playing video1 
  video1.addCue(37.3, webcamOff);//call the funtion changeVideo below after 5 seconds into playing video2
  video1.addCue(45.7, webcamB);//call the funtion changeVideo below after 5 seconds into playing video2
  video1.addCue(120.3, webcamOff);//call the funtion changeVideo below after 5 seconds into playing video2
  vid = video1; //loading the first video we want to play at the beginning

}

function vidplay() {
  vid.size(width,height); //resize the video that is drawing to canvas
  video1.hide(); //hid the video dom element
  vid.play();// plays the first video
}

function webcamOff(){
  //off mode
wheight =1;
wwidth=1;
wx=0;
wy=0;
}

function webcamA() {
  //large mode
  wx = width/3.5;
  wy = height/4;
  wwidth = width/3+140;
  wheight = height/3+75;
}

function webcamB(){
  //small mode
  wx = width/2 +3;
  wy = 14;
  wwidth = width/3-16;
  wheight = height/3-3;
}

function draw() {
  image(vid, 0, 0, width, height);//draw the video to the canvas
  image(capture, wx, wy, wwidth, wheight);
} 

