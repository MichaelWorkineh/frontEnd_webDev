let motionState = 'still'; 
const dropdown = document.getElementById('animations');
dropdown.addEventListener('change',function (e) {
    motionState = e.target.value;
})

const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
const CANVAS_WIDTH = canvas.width = 4800;
const CANVAS_HEIGHT = canvas.height = 1440;  

let gameSpeed = 5;

const bg1 = new Image();
bg1.src = "resources/BG/layer-1.png";
const bg2 = new Image();
bg2.src = "resources/BG/layer-2.png";
const bg3 = new Image();
bg3.src = "resources/BG/layer-3.png";
const bg4 = new Image();
bg4.src = "resources/BG/layer-4.png";
const bg5 = new Image();
bg5.src = "resources/BG/layer-5.png";

let cameraSpeed = {
    still:[0,0,0,0],
    normal:[1,2,2.5,3],
    fast:[2,4,5,6]
};

let x=0,y=0,z=0,e=0;
function backGround(){
    console.log("canvas cleared");
    ctx.drawImage(bg1,0,0,CANVAS_WIDTH,CANVAS_HEIGHT);
    ctx.drawImage(bg2,-x,0,CANVAS_WIDTH,CANVAS_HEIGHT);
    ctx.drawImage(bg2,-x+CANVAS_WIDTH,0,CANVAS_WIDTH,CANVAS_HEIGHT)
    ctx.drawImage(bg3,-y,0,CANVAS_WIDTH,CANVAS_HEIGHT);
    ctx.drawImage(bg3,-y+CANVAS_WIDTH,0,CANVAS_WIDTH,CANVAS_HEIGHT);
    ctx.drawImage(bg4,-z,0,CANVAS_WIDTH,CANVAS_HEIGHT);
    ctx.drawImage(bg4,-z+CANVAS_WIDTH,0,CANVAS_WIDTH,CANVAS_HEIGHT);
    ctx.drawImage(bg5,-e,0,CANVAS_WIDTH,CANVAS_HEIGHT);
    ctx.drawImage(bg5,-e+CANVAS_WIDTH,0,CANVAS_WIDTH,CANVAS_HEIGHT);
    console.log("image loaded");
    console.log();
    requestAnimationFrame(backGround);
    x+=cameraSpeed[motionState][0];
    y+=cameraSpeed[motionState][1];
    z+=cameraSpeed[motionState][2];
    e+=cameraSpeed[motionState][3];

    if(x==CANVAS_WIDTH) x=0;
    if(y>=CANVAS_WIDTH) y=0;
    if(z>=CANVAS_WIDTH) z=0;
    if(e>=CANVAS_WIDTH) e=0;
    
};
backGround();