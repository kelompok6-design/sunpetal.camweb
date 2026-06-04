const container =
document.getElementById(
"bubble-container"
);

function createBubble(){

const bubble =
document.createElement("div");

bubble.classList.add("bubble");

const size =
Math.random()*40 + 10;

bubble.style.width =
size + "px";

bubble.style.height =
size + "px";

bubble.style.left =
Math.random()*100 + "vw";

bubble.style.animationDuration =
(Math.random()*8 + 8) + "s";

container.appendChild(
bubble
);

setTimeout(()=>{

bubble.remove();

},16000);

}

setInterval(createBubble,300);
