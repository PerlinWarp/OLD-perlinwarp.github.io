function setup() {
  var canvasDiv = document.getElementById("backgroundCanvas");
  var divWidth = canvasDiv.offsetWidth;
  var divHeight = canvasDiv.offsetWidth;
  var sketchCanvas = createCanvas(divWidth,divHeight);
  sketchCanvas.parent("backgroundCanvas");
}

function draw() {
  if (mouseIsPressed){
    fill(0);
  } else {
    fill(255);
  }
  ellipse(mouseX, mouseY, 40, 40);

  if (keyIsPressed == true){
    clear();
  }
}
