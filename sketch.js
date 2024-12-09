let shapes = [];
let bgColors = [50, 100, 200, 255]; 

function setup() {
  createCanvas(800, 800);
  noStroke();

  for (let i = 0; i < 15; i++) {
    shapes.push(new BouncingShape(random(width), random(height), random(30, 60)));
  }
}

function draw() {
  drawGradientBackground();

  for (let shape of shapes) {
    shape.update();
    shape.display();
  }
}

function drawGradientBackground() {
  let c1 = color(bgColors[0], bgColors[1], bgColors[2]);
  let c2 = color(bgColors[2], bgColors[3], bgColors[0]);
  for (let y = 0; y < height; y++) {
    let inter = map(y, 0, height, 0, 1);
    let c = lerpColor(c1, c2, inter);
    stroke(c);
    line(0, y, width, y);
  }

  bgColors[0] = (bgColors[0] + 0.5) % 255;
  bgColors[1] = (bgColors[1] + 0.3) % 255;
  bgColors[2] = (bgColors[2] + 0.7) % 255;
  bgColors[3] = (bgColors[3] + 0.4) % 255;
}

