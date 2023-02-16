leftWristX = 0;
leftWristY = 0;

rightWristX = 0;
rightWristY = 0;

song = "";

function preload(){
song = loadSound("music.mp3")
}

function setup(){
canvas = createCanvas(600,500)
canvas.center()
video = createCapture(VIDEO)
video.hide()

poseNet = ml5.poseNet(video, modelLoaded)
poseNet.on("pose", gotPoses)
}

function draw(){
image(video,0,0,600,500)
}

function play(){
song.play()
song.setVolume(0.5)
song.rate(1)
}

function modelLoaded(){
console.log("Congrats! Your model has been loaded successfully!")
}

function gotPoses(results){
if(results.length>0)
{
console.log(results)

leftWrist_X = results[0].pose.leftWrist.x
leftWrist_Y = results[0].pose.leftWrist.y

rightWrist_X = results[0].pose.rightWrist.x
rightWrist_Y = results[0].pose.rightWrist.y
}
}