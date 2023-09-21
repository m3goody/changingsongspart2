song1="";
song2="";

function setup(){
    canvas=createCanvas(600,500);
    canvas.center();

    video=createCapture(VIDEO);
    video.hide();
}
function draw(){
    image(video,0,0,600,500);
}
function preload(){
    song1=loadSound("Moonlit-Walk(chosic.com).mp3");
    song2=loadSound("journey-end(chosic.com).mp3");
}