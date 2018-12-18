var canvas = document.querySelector('canvas');

// Ensure the canvas takes up the full browser window
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Create the context variable
const c = canvas.getContext('2d');

// Declare variable for x-coordinate, y-coordinate
let x = Math.random() * innerWidth;
let y = Math.random() * innerHeight;
// Declare variables for the velocity of movement
let dx = (Math.random() - 0.5) * 8;
let dy = (Math.random() - 0.5) * 8;
// Declare variable for the radius of the circle
let radius = 30;

function animate() {
  // Creates recursion
  requestAnimationFrame(animate);
  // Clears the canvas for each iteration
  c.clearRect(0, 0, innerWidth, innerHeight);

  // Draws the circle
  c.beginPath();
  c.arc(x, y, radius, 0, Math.PI*2, false);
  c.strokeStyle = 'blue';
  c.stroke();
  
  // Changes x-coordinate when circle hits left or right of viewport
  if(x + 30 > innerWidth || x - radius < 0) {
    dx = -dx;
  } 

  // Changes y-coordinate when circle hits left or right of viewport
  if(y + 30 > innerHeight || y - radius < 0) {
    dy = -dy;
  }
  
  x += dx;
  y += dy;
}

animate();