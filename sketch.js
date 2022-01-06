var runningGirl;
var Girl;
var road, roadImg;

function preload(){
    runningGirl = loadAnimation('runningGirl.gif');
    roadImg = loadImage('road.png');
    
}

function setup() {
 createCanvas(600, 600);

 Girl = createSprite(200,350,40,40);
 Girl.addAnimation("runningGirl", runningGirl);

 road = createSprite(200, 600, 40, 40);
 road.addImage("roadImg", roadImg);
}

function draw() {
 background('white');
 drawSprites();
}