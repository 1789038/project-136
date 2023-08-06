video="";
status="";
var input_text="";
function preload(){
    // video=createVideo('video.mp4');
    // video.hide();
}

function setup(){
    canvas=createCanvas(480,380);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(480,380);
    objectDetector=ml5.objectDetector('cocossd',modelLoaded);
    video.hide();
   // document.getElementById("status").innerHTML="Status: Detecting Objects";
}

function draw(){
    image(video,0,0,480,380);
}

function start(){
    objectDetector=ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML="Status: Detecting Objects";
    input_text=document.getElementById("object_name").value;
    //document.getElementById("status").innerHTML=input_text;
}

function modelLoaded(){
    console.log("Model Loaded: ");
    status=true;
    //video.loop();
    //video.speed(1);
    //video.volume(0);
}
