var canvas = document.querySelector('canvas');

// Ensure the canvas takes up the full browser window
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Create the context variable
const c = canvas.getContext('2d');

// Create a Rectangle object
function Rectangle(x, y, width, height, r, g, b) {
  this.x = x;
  this.y = y;
  this.width = width;
  this.height = height;
  this.r = r;
  this.g = g;
  this.b = b;

  this.draw = function() {
    // Draws the Rectangle
    c.fillRect(this.x, this.y, this.width, this.height);
    
    // Set the colour
    c.fillStyle = `rgba(${this.r}, ${this.g}, ${this.b}, 1)`;
    // c.stroke();
  }

  this.update = function() {
    // Updated the position of the circle
    // Changes x-coordinate when circle hits left or right of viewport
    // if(this.x + 30 > innerWidth || this.x - this.width < 0) {
    // // Change velocity direction
    // } 

    // // Changes y-coordinate when circle hits left or right of viewport
    // if(this.y + 30 > innerHeight || this.y - this.width < 0) {
    // // Change velocity direction
    // }
  
    // this.x += this.dx;
    // this.y += this.dy;

    this.draw();
  }
}

// Array to contain the circles
let rectArray = [];

c.lineWidth = 3;
// c.strokeStyle = 'rgba(84, 133, 207, 1)';

// Generates the circles and adds them to the circleArray
for(var i = 0; i < 10; i++) {
  
  let x = Math.random() * (innerWidth - radius * 2) + radius;
  let y = Math.random() * (innerHeight - radius * 2) + radius;
  let width = 200;
  let height = 200;
  var r = Math.floor(Math.random() * 255);
  var g = Math.floor(Math.random() * 255);
  var b = Math.floor(Math.random() * 255);
  
  rectArray.push(new Rectangle(x, y, width, height, r, g, b));
}

function animate() {
  // Creates recursion
  requestAnimationFrame(animate);
  // Clears the canvas for each iteration
  c.clearRect(0, 0, innerWidth, innerHeight);

  for (var i = 0; i < rectArray.length; i++){
    rectArray[i].update();
  }
}

animate();