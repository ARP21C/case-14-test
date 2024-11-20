let player;
let belt;
let beltSpeed = 2;
let beltDirectionX = 1;
let beltDirectionY = 1;

function setup() {
  createCanvas(800, 600);

  // Create player sprite
  player = new Sprite(width / 2, height / 2, 40, 40); // Positioned at center
  player.color = 'blue';

  // Create the "belt" sprite
  belt = new Sprite(width * 0.1, height * 0.9, 30, 30); // Positioned at the bottom-left corner
  belt.color = 'green';
}

function draw() {
  background(220);

  // Player movement
  if (kb.pressing('left')) player.vel.x = -5;
  else if (kb.pressing('right')) player.vel.x = 5;
  else player.vel.x = 0;

  if (kb.pressing('up')) player.vel.y = -5;
  else if (kb.pressing('down')) player.vel.y = 5;
  else player.vel.y = 0;

  // Constrain player within screen boundaries
  player.x = constrain(player.x, player.w / 2, width - player.w / 2);
  player.y = constrain(player.y, player.h / 2, height - player.h / 2);

  // Move the "belt" sprite
  belt.x += beltSpeed * beltDirectionX;
  belt.y += beltSpeed * beltDirectionY;

  // Reverse direction on hitting canvas boundaries
  if (belt.x < belt.w / 2 || belt.x > width - belt.w / 2) {
    beltDirectionX *= -1; // Reverse horizontal movement
  }
  if (belt.y < belt.h / 2 || belt.y > height - belt.h / 2) {
    beltDirectionY *= -1; // Reverse vertical movement
  }

  // Check for collisions
  if (player.collides(belt)) {
    belt.x = random(50, width - 50);
    belt.y = random(50, height - 50);
  }
}
