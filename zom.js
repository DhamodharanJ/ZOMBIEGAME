let life=document.querySelector(".life");
let times=document.querySelector(".time");
let audio=document.querySelector("#myaudio");
// let aa=new Audio()
function sound(){
 audio.pause();
 audio.currentTime=0;
    audio.play();
    }
var a=100;
let score=0;
let checkEscape=()=>{
    console.log('called')
    // let position=document.querySelector(".container").getBoundingClientRect();
    // if(position.top<=0){
        a=a-25;
        life.style.width=`${a}vw`;
        life.style.backgroundColor="red";
        destroy();
        if(a==0){
            localStorage.setItem('zombieScore',`${score}`)
            window.location.href="gameover.html";
        }
    // }  
}
function createzombie() {
    let random = Math.floor(Math.random() *5+1);
    let img = document.createElement('img')
    img.src = `zombie-${random}.jpg`
    img.setAttribute('class', 'container')
    img.style.marginLeft = `${Math.floor(Math.random() * 70 + 1)}rem`;
    let aniduration=Math.floor(Math.random()*5  +3);
    img.style.animationDuration= `${aniduration}s`;
    // console.log(aniduration);
    let timeoutId = setTimeout(checkEscape,aniduration*1000);
    img.addEventListener("click", () => {
        sound();
        score++;
        clearTimeout(timeoutId);
        destroy();
        
    })
    document.body.append(img);
}
createzombie();

function destroy() {
    document.querySelector(".container").remove();
    createzombie();
}

var time=60;
setInterval(endtime,1000);
function endtime(){
    times.textContent=time;
    time--;
    if(time==0){
        var game="welldone";
        localStorage.setItem('zombieScore',`${score}`)
        window.location.href="gameover.html";
    }
}

// let create=document.createElement("div");
// create.setAttribute('class','jsover');
// create=`<h1>${game}</h1><br><button>StartAgain</button>`;
// gameover.innerHTML=create;



 

