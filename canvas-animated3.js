// Animated square that moves around and changes size

var canvas = document.querySelector('canvas');

// Ensure the canvas takes up the full browser window
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Create the context variable
const c = canvas.getContext('2d');
x = 200;
y = 200;
width = 100;
height = 100;
let dx = 3;
let dy = 3;
let dWidth = 1;
let dHeight = 1;

function animate() {
  // Creates recursion
  requestAnimationFrame(animate);
  // Clears the canvas for each iteration
  c.clearRect(0, 0, innerWidth, innerHeight);

  // Draw square
  c.fillStyle = 'rgba(128, 164, 219, 1)';
  c.fillRect(x, y, width, height);

    // Changes x-coordinate when circle hits left or right of viewport
    if(x > innerWidth - 100 || x < 0) {
      dx = -dx;
    } 
  
    // Changes y-coordinate when circle hits left or right of viewport
    if(y > innerHeight - 100 || y < 0) {
      dy = -dy;
    }

    // Changes width when it reaches 200
    if(width > 150 || width < 50) {
      dWidth = -dWidth;
    } 
  
    // Changes width when it reaches 200
    if(height > 150 || height < 50) {
      dHeight = -dHeight;
    }
  
  x += dx;
  y += dy;
  width += dWidth;
  height += dHeight;

}

animate();
