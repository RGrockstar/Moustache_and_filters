noseX=0;
noseY=0;
function preload() {
  funny_filter= loadImage('https://i.postimg.cc/mgpKpW8J/Capture.jpg');
}
  
function setup() {
  canvas = createCanvas(300, 300);
  canvas.center();
  video=createCapture(VIDEO);
  video.size(300,300);
  video.hide();
  
  poseNet=ml5.poseNet(video, modelLoaded);
  poseNet.on('pose', gotPosses);
}
  
function modelLoaded(){
  console.log("poseNet is initialized");
}
  
function draw() {
  image(video,0, 0, 300, 300);
  image(funny_filter, noseX, noseY, 75, 75);
}
  
function gotPosses(results){
  if(results.length > 0){
  console.log(results);
  noseX=results[0].pose.nose.x;
  console.log(noseX);
  noseY=results[0].pose.nose.y;
  console.log(noseY);
};
};

function take_snapshot(){    
  save('myFilterImage.png');
}