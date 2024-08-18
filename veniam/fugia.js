   var canvas = document.getElementById('myCanvas');
   var context = canvas.getContext('2d');
   context.beginPath();
   context.arc(95, 50, 40, 0, 2 * Math.PI);
   context.strokeStyle = 'black';
   context.lineWidth = 3;
   context.stroke();
   context.fillStyle = 'red';
   context.fill();
   