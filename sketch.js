var song;
let img;
var volhistory =[];

function preload(){
 song = loadSound('badboy.mp3');
  img= loadImage('pooly.jpg'); 
  img2= loadImage('ball.png');
  //octahedron = loadModel('handz.obj');  
}


function toggleSong() {
  if (song.isPlaying()) {
    song.pause();
  } else {
    song.play();
  }
}function setup() {
  createCanvas(535, 800,WEBGL);
   button = createButton('toggle');
  button.mousePressed(toggleSong);
  song.play();
  amp = new p5.Amplitude();
  }

function draw() {
  background(251,255,23);
  var vol = amp.getLevel();
   volhistory.push(vol);
  texture(img);
  plane(535,800)
  //rotateY(frameCount/2,2);
 // rotateX(frameCount,3);
   fill(234,235,204);
  noStroke();
  scale(vol*2);
  texture(img2); 
  scale(2);
  plane(535,800);
  
  
  
  //fill(23,93,255);
  //stroke(255, 0, 0);
  //strokeWeight(.5);
  //ellipsoid(vol*280, vol*280, vol*280);
  
}