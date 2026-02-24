const canvas = document.getElementById("bg");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particles = [];
const amount = 90;

for(let i=0;i<amount;i++){
particles.push({
x:Math.random()*canvas.width,
y:Math.random()*canvas.height,
vx:(Math.random()-0.5)*0.6,
vy:(Math.random()-0.5)*0.6
});
}

function draw(){

ctx.clearRect(0,0,canvas.width,canvas.height);

/* MOVE + DOTS */
particles.forEach(p=>{
p.x+=p.vx;
p.y+=p.vy;

if(p.x<0||p.x>canvas.width) p.vx*=-1;
if(p.y<0||p.y>canvas.height) p.vy*=-1;

ctx.fillStyle="red";
ctx.fillRect(p.x,p.y,2,2);
});

/* LINES BETWEEN PARTICLES */
for(let i=0;i<particles.length;i++){
for(let j=i+1;j<particles.length;j++){

let dx = particles[i].x - particles[j].x;
let dy = particles[i].y - particles[j].y;
let dist = Math.sqrt(dx*dx+dy*dy);

if(dist < 140){
ctx.strokeStyle="rgba(255,0,0,0.25)";
ctx.beginPath();
ctx.moveTo(particles[i].x,particles[i].y);
ctx.lineTo(particles[j].x,particles[j].y);
ctx.stroke();
}
}
}

requestAnimationFrame(draw);
}

draw();

window.onresize = () =>{
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
};