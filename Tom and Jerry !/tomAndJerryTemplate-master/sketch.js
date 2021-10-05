var mouse;
var cat;
var backgrounImg;

function preload() {
    //load the images here
     backgrounImg = loadImage("images/garden.png");
     catImg1 = loadAnimation("images/cat1.png");
     mouseImg1 = loadAnimation("images/mouse1.png");
     catImg2 = loadAnimation("images/cat2.png");
     mouseImg2 = loadAnimation("images/mouse2.png");
     catImg3 = loadAnimation("images/cat3.png");
     mouseImg3 = loadAnimation("images/mouse3.png");
     catImg4 = loadAnimation("images/cat4.png");
     mouseImg4 = loadAnimation("images/mouse4.png"); 
     
     
     
     
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    cat = createSprite(850,700,20,20);
    cat.addAnimation("catSitting",catImg1)
    cat.scale = 0.1

    mouse = createSprite(150,690,20,20);
    mouse.addAnimation("mouseStanding",mouseImg1)
    mouse.scale = 0.1
}

function draw() {

    background(backgrounImg);
    //Write condition here to evalute if tom and jerry collide
    if(cat.x -  mouse.x < (cat.width - mouse.width)/2){
        cat.velocityX = 0
        cat.addAnimation("lastAnimation",catImg4) 
        cat.changeAnimation("lastAnimation")
        cat.x = 250
        cat.scale = 0.1

        mouse.addAnimation("lastAnimated",mouseImg4)
        mouse.changeAnimation("lastAnimated")
    }

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
  if(keyCode === LEFT_ARROW){
      mouse.addAnimation("mouseTeassing",mouseImg3)
      mouse.changeAnimation("mouseTeassing");
      mouse.frameDelay = 25 ;

      cat.velocityX = -5;
      cat.addAnimation("catChasing",catImg2  );
      cat.changeAnimation("catChasing");
      
      
    
      
      
  }


}
