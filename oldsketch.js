//sketch.js

var x = 700;
var y = 400;


function setup() {
  var canvas = createCanvas(1400, 800);
  canvas.parent('sketch-holder');
  background(200);
}

function draw(){
	fill(255);
	var one = random(0,1);
	var two = random(0,1);
	console.log(one,two)
	if(one > 0.5){
		x = x + 50;
	
	}else{
		x = x - 50;
	}
	if(two > 0.5){
		y = y + 50;
	}else{
		y = y - 50;
	}

	//Boundaries
	if(x > width){x = width;}
	if(x < 0){x = 0;}
	if(y > height){y = height;}
	if(y < 0){y = 0;}
	fill(random(255),random(255),random(255));
	rect(x,y,50,50);
}

