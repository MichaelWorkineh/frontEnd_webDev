let animationState = 'idle';
const dropdown = document.getElementById('animations');
dropdown.addEventListener('change',function (e) {
    animationState = e.target.value;
})

const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');

const CANVAS_WIDTH = canvas.width = 600;
const CANVAS_HEIGHT = canvas.height = 600;

const playerImage = new Image();//image class constructor
playerImage.src = "resources/shadow_dog.png";
let frameX = 0;
let frameY = 0;
let gameFrame =0;
const staggerframe = 4;
const spritewidth = 575;
const spriteheight = 523;

let animztionInfo = [6,6,6,8,10,4,6,6,10,3];
let animationType ={idle:0, jump:1, fall:2, run:3, dizzy:4, sit:5, roll:6, bite:7, ko:8, getHit:9};

function animate(){

    ctx.clearRect(0,0,CANVAS_WIDTH,CANVAS_HEIGHT);
    let postion = Math.floor(gameFrame/staggerframe)%animztionInfo[animationType[animationState]];
    frameX = postion*spritewidth;
    ctx.drawImage(playerImage,frameX,animationType[animationState]*spriteheight,spritewidth,spriteheight,0,0,spritewidth,spriteheight);
    
    gameFrame++;
    
    requestAnimationFrame(animate);
};
console.log("yey it works!!!")
animate();

