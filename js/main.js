const car=document.getElementById("car");
const gamebox=document.querySelector(".game-box");
const score=document.getElementById("score");
const cararray=["grey","orange","purple","blue","red"];
const game=document.querySelector("#gameover")
var left=200;
var bottom=100;
var scr=0;
var i=15;
isGameOver=false;
car.style.left=left+'px';
gamebox.classList.add("moving");
const control=(e)=>{
switch(e.keyCode)
{ 
    case 37: //left arrow key
       if(left>35) 
       left-=15;
        break;
    case 38: //Up arrow key
        if(bottom<500) bottom+=10;
        break;
    case 39: //right arrow key
    if(left<220) left+=15;
        break;
    case 40: //down arrow key
        if(bottom>25) bottom-=10;
        break;						
}
car.style.left=left+'px';
car.style.bottom=bottom+'px';
}
const getobs=()=>{
    let obsbottom=680;
    let randomleft = Math.floor(Math.random() * 200);
    let index=Math.floor(Math.random()*cararray.length);
    const img=document.createElement("img");
    let obsleft = randomleft+50;
    img.setAttribute("src",`./img/${cararray[index]}.png`);
    console.log(obsleft);
   const obs=document.createElement("div");
   obs.appendChild(img);
   obs.style.left=obsleft+'px';
    if (!isGameOver) {
        obs.classList.add('obs');
    
    gamebox.appendChild(obs);
    }
    function moveobs() {
        obsbottom -=2
        
        obs.style.bottom = obsbottom + 'px'
        
        if (obsbottom === -15) {
            clearInterval(timerId)
            gamebox.removeChild(obs)
        }
        if((obsbottom<bottom+70&&obsbottom>bottom-70)&&(left>obsleft-35&&left<obsleft+35))
        {
            isGameOver=true;
            gameover();
              }
        if(isGameOver)
        {
            clearInterval(timerId);
        }
}
scr+=1;

if(scr<10)
{
    scrs="00"+scr;
    i=15;
}
else if(scr>10&&scr<100)
{
scrs="0"+scr;
i=10;
}
else if(scr>100)
{
    i=5;
}
score.textContent=scrs;
var timerId = setInterval(moveobs, i);
if (!isGameOver) setTimeout(getobs, i*100);
}


getobs();
const gameover=()=>{
document.removeEventListener('keydown',control);
 gamebox.classList.remove("moving");
game.innerHTML="<h2>GAME OVER!</h2><br><h3>Reload to play again</h3>"
}
document.addEventListener('keydown',control);
