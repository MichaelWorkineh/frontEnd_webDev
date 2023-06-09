window.addEventListener("load",()=>{
    const canvas=document.querySelector("#canvas");
    const ctx=canvas.getContext("2d");
    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;
    
   let painting = false;
   function startpostion(e){
    painting=true;
    draw(e);
   }
   function endpostion(){
    painting=false;
    ctx.beginPath();
   }

   function draw(e){
    if(!painting) return;
    ctx.lineWidth = 10;
    ctx.lineCap = "round";
    ctx.lineTo(e.clientX,e.clientY);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(e.clientX,e.clientY)
   }
   canvas.addEventListener("mousedown",startpostion);
   canvas.addEventListener("mouseup",endpostion);
   canvas.addEventListener("mousemove",draw);
});
/*
window.addEventListener("resize",()=>{
    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;
})
*/