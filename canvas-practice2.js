var canvas = document.querySelector('canvas');

// Ensure the canvas takes up the full browser window
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Create the context variable
const c = canvas.getContext('2d');

// // Rectangle
// c.fillStyle = 'rgba(208, 251, 225, 1)';
// // properties - x, y, width, height
// c.fillRect(200, 200, 100, 100);
// c.fillRect(300, 300, 100, 100);
// c.fillStyle = 'rgba(128, 164, 219, 1)';
// c.fillRect(500, 500, 50, 50);
// c.fillRect(400, 350, 50, 50);

// // Drawing a Line!
// c.beginPath();
// // move to accepts x and y coordinates
// c.moveTo(50, 300);
// c.lineTo(100, 600);
// c.lineTo(400, 300);
// c.strokeStyle = 'rgba(128, 219, 187, 1)';
// // stroke actually draws the line
// c.stroke();

// c.fillRect(600, 450, 300, 150);
// c.stroke();

// c.strokeStyle = 'rgba(84, 133, 207, 1)';
// c.fillRect(590, 430, 300, 150);
// c.stroke();

// c.lineWidth = 5;
// c.beginPath();
// c.moveTo(650, 500);
// c.lineTo(700, 550);
// c.lineTo(750, 500);
// c.lineTo(800, 550);
// c.lineTo(850, 500);
// c.stroke();

// Arc / circle

// c.beginPath();
// c.arc(300, 300, 30, 0, Math.PI*2, false);
// c.stroke();

// Generating multiple circles

c.lineWidth = 3;
c.strokeStyle = 'rgba(84, 133, 207, 1)';

for(var i = 0; i < 50; i++){
  // Generate random values for the colour
  var r = Math.floor(Math.random() * 255);
  var g = Math.floor(Math.random() * 255);
  var b = Math.floor(Math.random() * 255);
  // Generate random values for the position
  var x = Math.random() * window.innerWidth;
  var y = Math.random() * window.innerHeight;
  // Generate random value for the radius
  var radius = Math.floor(Math.random() * 150);
  c.strokeStyle = `rgba(${r}, ${g}, ${b}, 1)`;
  c.beginPath();
  c.arc(x, y, radius, 0, Math.PI * 2, false);
  c.stroke();
}