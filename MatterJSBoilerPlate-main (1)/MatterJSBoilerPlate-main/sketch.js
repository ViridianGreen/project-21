var ball;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
 
function preload()
{
   
}
 
function setup() {
    createCanvas(windowWidth-20, windowHeight-5);
 
    engine = Engine.create();
    world = engine.world;
 
    //Create the Bodies Here.
    ball_options={
    isStatic:true,
    restitution: 0.4,
    friction: 0,
    density: 1.2}
 
    Engine.run(engine);
 
    ball = Bodies.circle(200,50,20,ball_options)
    World.add(world,ball)
    ground = new Ground(width/2,550,width,20)
    leftside = new Ground(850,480,20,120)
    rightside = new Ground(1100,480,20,120)
 
   
    rectMode(CENTER);
    ellipseMode(RADIUS)
}
 
 
function draw() {
  background(0);
  fill("magenta")
  ground.display()
  leftside.display()
  rightside.display()
  fill(255)
  ellipse(ball.position.x,ball.position.y,20,20)
keyPressed()
Engine.update(engine)
}
 
function keyPressed()
{if(keyCode === UP_ARROW){
 Matter.Body.applyForce(ball,ball.position,{x:85,y:-85})}
}
