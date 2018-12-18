var canvas = document.querySelector('canvas');

// Ensure the canvas takes up the full browser window
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Create the context variable
const c = canvas.getContext('2d');

// Create a Circle object
function Circle(x, y, dx, dy, radius, r, g, b) {
  this.x = x;
  this.y = y;
  this.dx = dx;
  this.dy = dy;
  this.radius = radius;
  this.r = r;
  this.g = g;
  this.b = b;

  this.draw = function() {
    // Draws the circle
    c.beginPath();
    
    // Create the circle
    c.arc(this.x, this.y, this.radius, 0, Math.PI*2, false);
    // Set the colour
    c.strokeStyle = `rgba(${this.r}, ${this.g}, ${this.b}, 1)`;
    c.stroke();
  }

  this.update = function() {
    // Updated the position of the circle
    // Changes x-coordinate when circle hits left or right of viewport
    if(this.x + 30 > innerWidth || this.x - this.radius < 0) {
    this.dx = -this.dx;
    } 

    // Changes y-coordinate when circle hits left or right of viewport
    if(this.y + 30 > innerHeight || this.y - this.radius < 0) {
    this.dy = -this.dy;
    }
  
    this.x += this.dx;
    this.y += this.dy;

    this.draw();
  }
}

// Array to contain the circles
let circleArray = [];

c.lineWidth = 3;
// c.strokeStyle = 'rgba(84, 133, 207, 1)';

// Generates the circles and adds them to the circleArray
for(var i = 0; i < 100; i++) {
  
  let radius = 30;
  let x = Math.random() * (innerWidth - radius * 2) + radius;
  let y = Math.random() * (innerHeight - radius * 2) + radius;
  let dx = (Math.random() - 0.5) * 3;
  let dy = (Math.random() - 0.5) * 3;
  var r = Math.floor(Math.random() * 255);
  var g = Math.floor(Math.random() * 255);
  var b = Math.floor(Math.random() * 255);
  
  circleArray.push(new Circle(x, y, dx, dy, radius, r, g, b));
}

function animate() {
  // Creates recursion
  requestAnimationFrame(animate);
  // Clears the canvas for each iteration
  c.clearRect(0, 0, innerWidth, innerHeight);

  for (var i = 0; i < circleArray.length; i++){
    circleArray[i].update();
  }
}

animate();