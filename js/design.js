/* =========================
   SCROLL REVEAL
========================= */

const reveals =
document.querySelectorAll(
".concept, .gallery, .credit, .canva-section"
);

window.addEventListener(
"scroll",
revealElements
);

function revealElements(){

for(let i=0;i<reveals.length;i++){

const windowHeight =
window.innerHeight;

const revealTop =
reveals[i]
.getBoundingClientRect()
.top;

if(revealTop < windowHeight - 100){

reveals[i]
.classList.add("active");

}

}

}

/* =========================
   HERO PARALLAX
========================= */

window.addEventListener(
"scroll",
()=>{

const hero =
document.querySelector(".hero");

let offset =
window.pageYOffset;

hero.style.backgroundPositionY =
offset * 0.5 + "px";

}
);

/* =========================
   FLOATING LANTERNS
========================= */

const lanternContainer =
document.getElementById(
"lantern-container"
);

function createLantern(){

const lantern =
document.createElement("div");

lantern.classList.add(
"floating-lantern"
);

lantern.innerHTML = "🏮";

lantern.style.left =
Math.random()*100 + "vw";

lantern.style.animationDuration =
(Math.random()*12 + 15)
+ "s";

lantern.style.fontSize =
(Math.random()*20 + 25)
+ "px";

lanternContainer.appendChild(
lantern
);

setTimeout(()=>{

lantern.remove();

},30000);

}

setInterval(
createLantern,
1500
);

/* =========================
   FLOATING BUBBLES
========================= */

const bubbleContainer =
document.getElementById(
"bubble-container"
);

function createBubble(){

const bubble =
document.createElement("div");

bubble.classList.add(
"bubble"
);

const size =
Math.random()*35 + 10;
