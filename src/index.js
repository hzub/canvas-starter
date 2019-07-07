const context = document.querySelector('canvas').getContext('2d');

function draw() {
  context.fillStyle = 'tomato';
  context.fillRect(0, 0, 800, 600);
  context.fillStyle = 'black';
  context.font = '24px sans-serif';
  context.fillText('Hello world!', 100, 100);
}

requestAnimationFrame(draw);