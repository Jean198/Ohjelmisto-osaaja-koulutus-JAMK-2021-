
var range= document.getElementById("range");
var display=document.getElementById("value");
display.innerHTML=range.value;


range.oninput=function(){
    display.innerHTML=this.value;
}


var canvas = /** @type {HTMLCanvasElement} */ (document.querySelector('#canvas'))
var ctx=canvas.getContext('2d');

ctx.beginPath();
ctx.fillStyle = "lightblue";
ctx.arc(500,300,200,0,Math.PI * 2)
ctx.fill();
ctx.stroke()

ctx.beginPath();
ctx.fillStyle = "black";
ctx.font = "22px Arial";
ctx.fillText('Nestemäärä:', 15, 20);

ctx.closePath();