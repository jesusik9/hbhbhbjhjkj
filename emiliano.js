noseX=80;
noseY=80;
diference=0;
rightWristX=00;
leftWristX=00;

function setup(){video=createCapture(VIDEO);
video.sice(100,100);
canvas=createCanvas(400,400);
canvas.position(550,200);

poseNet=ml5.poseNet(video,modelLoaded);
poseNet.on('pose', gotPoses);

}
function modelLoad(){console.log('ya esta actibado:)')}

function gotPoses(r){console.log(r);
    if(r.length>0){console.log (r);
noseX=r[0].pose.nose.x;
noseY=r[0].pose.nose.y;
leftWristX=r[0].pose.leftWrist.x;
leftWristY=r[0].pose.leftWrist.y;
difference = floor(leftWristX - rightWristX);



    }

}





function draw(){background('#969A97'); document.getElementById("square_side").innerHTML = "El alto y ancho del cuadrado será: " + difference +"px"; fill('#F90093'); stroke('#F90093');
square(noseX,noseY,diference);

}