// 360 imaging & WebGL in p5 (!)

// https://processing.org/tutorials/p3d/
// https://github.com/processing/p5.js/wiki/Getting-started-with-WebGL-in-p5
// http://p5js.org/reference/#/p5/texture

// https://en.wikipedia.org/wiki/Jacob_Riis_Park
// https://en.wikipedia.org/wiki/Jacob_Riis
var jacobRiis;
var theCanvas;

function setup(){

	jacobRiis = loadImage("/data/photographers.jpg")
	theCanvas =	createCanvas(windowWidth,windowHeight, WEBGL);

}

function draw(){

	background(0,200,0);

	// move the camera away from the plane by a sin wave
	// http://p5js.org/reference/#/p5/camera
	camera(0, 0, sin(frameCount * 0.01) * 100);

	// quick & dirty mouse controls: orbitControl() is a p5 function
	// http://p5js.org/examples/3d-orbit-control.html
	orbitControl();

	push();
	// rotateZ(frameCount * 0.005);
	// rotateX(frameCount * 0.005);
	// 185 degrees bc all 360 images are selfies kinda
	rotateY(185 + (frameCount * 0.005));
	texture(jacobRiis);
	var world = sphere(200, 100, 40);
	pop();

}
