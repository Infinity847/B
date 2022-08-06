var ready = false;
var personfound = false;

function setup() {
    canvas = createCanvas(screen.width/2,screen.height/2);
    canvas.center();
    capture = createCapture(VIDEO);
  capture.hide();
  objectDetector = ml5.objectDetector('cocossd',modelLoaded);
}
function modelLoaded() {
  console.log("Cocossd is loaded");

}
function draw() {
    image(capture,0,0,screen.width/2,screen.height/2);


if (ready == true) {
  objectDetector.detect(capture,gotResult);
}
}
function start() {
ready = true;
}
function gotResult(error,results) {
  if(error) {
     console.log(error);
  }
  {
console.log(results);
    personfound = false;
  for (i = 0; i < results.legnth; i++) {
if (results[i].label == "person") {
personfound = true;
saytext("alert! Someone has went into your bed!");
}

  }

  }
}
function saytext(text) {
    const sound = new SpeechSynthesisUtterance(text);
    sound.rate = 1;
    speechSynthesis.speak(sound);
}
