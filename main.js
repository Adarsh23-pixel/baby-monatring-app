video = "";
status = "";
object = [];

function preload() {
   
    img = loadImage('imagesbaby.jpg');
    
}
function setup() {
   
    canvas = createCanvas(480,380);
    canvas.center();
      
}   
function draw() {

image(img,0,0,480,380);
fill('red');
text("person",45,75);
noFill()
stroke("yellow");
rect(30,60,400,350);
percent = floor(object[i].confidence *100);
text(object[i].label +"  "+percent+ "%",object[i].x,object[i].y);


}


function start() {
    objectDetector = ml5.objectDetector('cocossd',ModelLoaded);
    document.getElementById("status").innerHTML = "status : Detecting Object";

}
 function ModelLoaded() {
     console.log("Model is loaded");
     status = true;
     video.loop();
     video.speed(1);
     video.volume(0);
 }
function gotResult(error,results) {
   if(error ){
       console.log(error);
       
   }
   else {
   
    console.log(results);
    object = results;
   }

}