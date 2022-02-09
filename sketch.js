var bg,bgImage;

function  preload(){
bgImage = loadImage("bg.jpg")
}

function setup(){
createCanvas(600,250)

var bg = createSprite(200,200,100,100)
bg.addImage(bgImage)
}

function draw(){
    background("red")

    drawSprites()
}