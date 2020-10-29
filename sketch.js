var Engine = Matter.Engine, 
var World = Matter.World, 
var Events = Matter.Events, 
var Bodies = Matter.Bodies; 
var groundobj;
var division1,division2,division3,division4,division5;
var divisionheight=300;
var particle = [];
var plinkos = [];
var divisions =[];
var score=0;
var world,engine;

function setup() {
createCanvas(800,800);
engine = Engine.create(); 
world = engine.world; 
groundobj = new ground(width/2,height,width,20);
division1 = new division(120,740,10,divisionheight);
division2 = new division(240,740,10,divisionheight);
division3 = new division(360,740,10,divisionheight);
division4 = new division(480,740,10,divisionheight);
division5 = new division(600,740,10,divisionheight);
division6 = new division(720,740,10,divisionheight);
for (var  j = 40; j <=width;  j=j+50){
Plinkos.push(new plinko(j,75));
}
    
for (var  j = 15; j <=width-10;  j=j+50){
Plinkos.push(new plinko(j,175));
}
    
for (var  k = 40; k <=width;  k=k+50){
Plinkos.push(new plinko(j,225));
}
    
for (var  k = 15; k <=width-10;  k=k+50 ){
Plinkos.push(new plinko(j,325));
}
    
}

function draw() {
background(0);  
groundobj.display();


if(framecount%60===0){
particle.push(new particles(random(width/2-10,width/2+10,),10,10));
}

}
