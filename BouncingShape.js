

class BouncingShape {
  constructor(x, y, size) {
    this.x = x;
    this.y = y;
    this.size = size;
    this.baseSize = size; // Base size for pulsing effect
    this.xSpeed = random(-2, 2);
    this.ySpeed = random(-2, 2);
    this.color = color(random(255), random(255), random(255));
  }

  update() {
    this.size = this.baseSize + sin(frameCount * 0.1) * 10;

    this.x += this.xSpeed;
    this.y += this.ySpeed;

    if (this.x < 0 || this.x > width) this.xSpeed *= -1;
    if (this.y < 0 || this.y > height) this.ySpeed *= -1;
  }

  display() {
    fill(this.color);
    ellipse(this.x, this.y, this.size);
  }
}
