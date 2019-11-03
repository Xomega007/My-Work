  
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground, ball, ballV2, Henry;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    var ground_options ={
        isStatic: true
    }

    ground = Bodies.rectangle(200,390,400,20,ground_options);
    World.add(world,ground);
    var Henry_options = {
       restituition : 1.0
    }
    Henry = Bodies.circle(250,250,50,Henry_options);
    World.add(world, Henry)
    var ball_options ={
        restitution: 1.0
    }

    ball = Bodies.circle(200,100,20, ball_options);
    World.add(world,ball);
    var ballV2_options = {
        restitution : 1.0
    }
    ballV2 = Bodies.circle(300,300,50,ballV2_options);
    World.add(world,ballV2)
    console.log(ground);
}

function draw(){
    background(0);
    Engine.update(engine);
    rectMode(CENTER);
    rect(ground.position.x,ground.position.y,400,20);

    ellipseMode(RADIUS);
    ellipse(ball.position.x, ball.position.y, 20, 20);
    ellipseMode(RADIUS);
    ellipse(ballV2.position.x, ballV2.position.y, 50, 50);
    ellipseMode(RADIUS);
    ellipse(Henry.position.x, Henry.position.y, 50, 50);
   

}