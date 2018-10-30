let canvas = document.querySelector("#emoji");
let ctx = canvas.getContext("2d");

const circle = (x,y,radius) =>{
    ctx.arc(x, y, radius, 0, 2*Math.PI);
}

ctx.beginPath();
circle(250, 250, 250);
ctx.fillStyle = "rgb(255,221,102)";
ctx.fill();

ctx.beginPath();
circle(150, 180, 40);
ctx.fillStyle = "rgb(102,78,39)";
ctx.fill();

ctx.beginPath();
circle(350, 180, 40);
ctx.fillStyle = "rgb(102,78,39)";
ctx.fill();

ctx.beginPath();
ctx.moveTo(400,275);
ctx.arcTo(400, 425, 250, 425, 150);
ctx.arcTo(100, 425, 100, 275, 150);
ctx.arcTo(100, 265, 110, 265, 10);
ctx.lineTo(390,265);
ctx.arcTo(400, 265, 400, 275, 10);
ctx.fillStyle = "rgb(102,78,39)";
ctx.fill();

ctx.beginPath();
ctx.ellipse(250, 375, 100, 125, Math.PI, Math.PI,  2 * Math.PI);
ctx.lineTo(150,330);
ctx.arcTo(150, 320, 160, 320, 10);
ctx.lineTo(340,320);
ctx.arcTo(350, 320, 350, 375, 10);
ctx.fillStyle = "rgb(255,113,127)";
ctx.fill();

ctx.beginPath();
ctx.moveTo(250,465);
ctx.lineTo(235,320);
ctx.lineTo(265,320);
ctx.closePath();
ctx.fillStyle = "rgb(226,89,108)";
ctx.fill();
