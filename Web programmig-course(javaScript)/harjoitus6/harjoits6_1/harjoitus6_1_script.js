
var canvas = /** @type {HTMLCanvasElement} */ (document.querySelector('#canvas'))
var ctx=canvas.getContext('2d');

ctx.fillStyle='yellow';
ctx.fillRect(10,10,480,250);
ctx.fillStyle='blue';
ctx.fillRect(10,10,100,95);
ctx.fillRect(10,165,100,95);
ctx.fillRect(170,10,320,95);
ctx.fillRect(170,165,320,95);


ctx.fillStyle='#009E49';
ctx.fillRect(10,280,480,250);
ctx.beginPath();
ctx.moveTo(10,284);
ctx.lineTo(475,405);
ctx.lineTo(10,525);
ctx.lineWidth=7;
ctx.strokeStyle="white";
ctx.stroke()
ctx.fillStyle="#FCD116";
ctx.fill()

ctx.beginPath();
ctx.moveTo(10,284);
ctx.lineTo(230,405);
ctx.lineTo(10,525);
ctx.lineWidth=7;
ctx.strokeStyle="black";
ctx.stroke()
ctx.fillStyle="#CE1126";
ctx.fill()






