let playerLvl4;
let belt;
let beltSpeed = 2;
let beltDirectionX = 1;
let beltDirectionY = 1;
let car;
let carSpeed = 2;
let carDirectionX = 1;
let carDirectionY = 1;
let house;
let houseSpeed = 2;
let houseDirectionX = 1;
let houseDirectionY = 1;


function setup() {
  createCanvas(800, 600);

  // Create player sprite
  playerLvl4 = new Sprite(width / 2, height / 2, 40, 40, 'dynamic'); // Positioned at center


  // Create the "belt" sprite
  belt = new Sprite(width * 0.1, height * 0.9, 30, 30); // Positioned at the bottom-left corner
  belt.color = 'green';

  //create the "car" sprite
  car = new Sprite(width * 0.5, height * 0.3, 30, 30);

  // Create the "house" sprite
  house = new Sprite(width * 0.2, height * 0.5, 30, 30); // Positioned at the bottom-left corner
  
  
}

function draw() {
  background(220);

  // Player movement
  if (kb.pressing('left')) playerLvl4.vel.x = -5;
  else if (kb.pressing('right')) playerLvl4.vel.x = 5;
  else playerLvl4.vel.x = 0;

  if (kb.pressing('up')) playerLvl4.vel.y = -5;
  else if (kb.pressing('down')) playerLvl4.vel.y = 5;
  else playerLvl4.vel.y = 0;

  // Constrain player within screen boundaries
  playerLvl4.x = constrain(playerLvl4.x, playerLvl4.w / 2, width - playerLvl4.w / 2);
  playerLvl4.y = constrain(playerLvl4.y, playerLvl4.h / 2, height - playerLvl4.h / 2);

  // Move the "belt" sprite
  belt.x += beltSpeed * beltDirectionX;
  belt.y += beltSpeed * beltDirectionY;

  //move the "car" sprite
  car.x += carSpeed * carDirectionX;
  car.y += carSpeed * carDirectionY;

  house.x += houseSpeed * houseDirectionX;
  house.y += houseSpeed * houseDirectionY;

  // Reverse direction on hitting canvas boundaries
  if (belt.x < belt.w / 2 || belt.x > width - belt.w / 2) {
    beltDirectionX *= -1; // Reverse horizontal movement
  }
  if (belt.y < belt.h / 2 || belt.y > height - belt.h / 2) {
    beltDirectionY *= -1; // Reverse vertical movement
  }

  //reverse direction on hitting canvas boundaries
  if (car.x < car.w /2 || car.x > width - car.w /2) {
	carDirectionX *= -1;
  }
  if (car.y < car.h / 2 || car.y > height - car.h / 2) {
    carDirectionY *= -1; // Reverse vertical movement
  }

  // Reverse direction on hitting canvas boundaries
  if (house.x < house.w / 2 || house.x > width - house.w / 2) {
    houseDirectionX *= -1; // Reverse horizontal movement
  }
  if (house.y < house.h / 2 || house.y > height - house.h / 2) {
    houseDirectionY *= -1; // Reverse vertical movement
  }

  //collisions
  playerLvl4.overlaps(belt, resetForLvl4);
  playerLvl4.overlaps(car, resetForLvl4);
  playerLvl4.overlaps(house, resetForLvl4);

 
}

function resetForLvl4() {
	playerLvl4.x = width / 2;
	playerLvl4.y = height / 2;
}
