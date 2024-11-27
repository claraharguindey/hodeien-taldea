function setup() {
  let canvas = createCanvas(windowWidth / 2 , windowHeight - 22);
  canvas.parent("canvas-side");
  background(255);
}

function draw() {
  if (mouseIsPressed) {
    stroke(0);
    strokeWeight(1);
    line(pmouseX, pmouseY, mouseX, mouseY);
  }
}

function windowResized() {
  resizeCanvas(windowWidth / 2, windowHeight - 22);
}
