img="";
status="";
objects=[];
song="";

function preload(){

song=loadSound("be_happy.mp3");

}

function setup(){

   canvas=createCanvas(380,380);
   canvas.center();
 
   video= createCapture(VIDEO);
   video.hide();
   video.size(380,380);
   
   objectDetector = ml5.objectDetector('cocossd' , modelLoaded );
   document.getElementById("status").innerHTML="status : detecting objects ";
   document.getElementById("number_of_objects").innerHTML="baby found" + objects.length;
   }

   function modelLoaded(){

      console.log("modelLoaded");
      status=true;
      
      }
      
function gotResult(error , results){
      
         if(error){
         console.log(error);
         
         }
         console.log(results);
         objects = results;
}

function draw(){

image(video,0,0,380,380);

if(status !=""){

objectDetector.detect(img, gotResult);

for(i = 0 ;i < objects.length ;i++){


document.getElementById("status").innerHTML="status : object detected";
fill("#FF0000")
percent = floor(objects[i].confidence*100);
text(objects[i].label + " " + percent + "%" ,objects[i].x +15, objects[i].y +15);
noFill();
stroke("#FF0000");
rect(objects[i].x ,objects[i].y ,objects[i].width ,objects[i].height );

if(object[i].label=="person"){

document.getElementById("number_of_objects").innerHTML="baby found";
console.log("stop");
song.stop();

}

else{

   document.getElementById("number_of_objects").innerHTML="baby not found";
   console.log("play");
   song.play();

}

if(objects.length==0){

   document.getElementById("number_of_objects").innerHTML="baby not found";
   console.log("play");
   song.play();

}

}


}


}




