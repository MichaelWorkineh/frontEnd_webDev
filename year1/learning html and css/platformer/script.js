const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');

const CANVAS_WIDTH = canvas.width = 600;
const CANVAS_HEIGHT = canvas.height = 600;

const playerImage = new Image();//image class constructor
playerImage.src = "resources/shadow_dog.png";
let frameX = 0;
let frameY = 5;
let gameFrame =0;
const staggerframe = 4;
const spritewidth = 575;
const spriteheight = 523;

function animate(){
    ctx.clearRect(0,0,CANVAS_WIDTH,CANVAS_HEIGHT);
    //ctx.fillRect(100,50,100,100);
    ctx.drawImage(playerImage,frameX*spritewidth,frameY*spriteheight,spritewidth,spriteheight,0,0,spritewidth,spriteheight);
    if(gameFrame%staggerframe==0){
        if(frameX<4) frameX++;
        else frameX=0;
    }
    gameFrame++;
    
    requestAnimationFrame(animate);
};
animate();
