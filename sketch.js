var canvas;
var music;
var b1, b2, b3, b4;
var ball;
var edge;

function preload(){
    music = loadSound("music.mp3");
}

function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
     b1 = createSprite(100,580,180,30);
     b1.shapeColor = 'blue';

     b2 = createSprite(290,580,180,30);
     b2.shapeColor = 'orange';

     b3 = createSprite(480,580,180,30);
     b3.shapeColor = 'red';

     b4 = createSprite(680,580,200,30);
     b4.shapeColor = 'green';
     
     //create box sprite and give velocity

     ball = createSprite(random(20,750),100,30,30);
     ball.shapeColor = 'white';
     ball.velocityX = 2;
     ball.velocityY = 8; 

}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
    edge = createEdgeSprites();
    ball.bounceOff(edge);

    //add condition to check if box touching surface and make it box

    if(b1.isTouching(ball) && ball.bounceOff(b1)) {
        ball.shapeColor = 'blue';
        music.play();
    } 

    if(b2.isTouching(ball) && ball.bounceOff(b2)) {
        ball.shapeColor = 'orange';
        ball.velocityX = 0;
        ball.velocityY = 0; 
       // music.stop();
    }

    if(b3.isTouching(ball) && ball.bounceOff(b3)) {
        ball.shapeColor = 'red';
    } 

    if(b4.isTouching(ball) && ball.bounceOff(b4)) {
        ball.shapeColor = 'green';
    }

    drawSprites();
}
