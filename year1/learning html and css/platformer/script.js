const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');

const CANVAS_WIDTH = canvas.width = 600;
const CANVAS_HEIGHT = canvas.height = 600;

const playerImage = new Image();//image class constructor
playerImage.src = "resources/shadow_dog.png";
x=0,fx=0;
y=1;
const spritewidth = 575;
const spriteheight = 523;

function animate(){
    ctx.clearRect(0,0,CANVAS_WIDTH,CANVAS_HEIGHT);
    //ctx.fillRect(100,50,100,100);
    ctx.drawImage(playerImage,fx*spritewidth,y*spriteheight,spritewidth,spriteheight,0,0,spritewidth,spriteheight);
    x++;
    if(x%5==0) fx++;
    if(fx==7) fx=0,y++;
    if(y==3) y=0;
     //y=0;
    requestAnimationFrame(animate);
};
animate();
