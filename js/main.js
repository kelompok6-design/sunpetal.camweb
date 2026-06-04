

/* =========================
   MUSIC
========================= */

const music =
document.getElementById("bgMusic");

const musicBtn =
document.getElementById("musicBtn");

let playing = false;

musicBtn.addEventListener("click", () => {

if (!playing) {

music.play();

musicBtn.innerHTML = "🔊";

playing = true;

} else {

music.pause();

musicBtn.innerHTML = "🎵";

playing = false;

}

});

/* =========================
   SCROLL REVEAL
========================= */

const reveals =
document.querySelectorAll(".reveal");

window.addEventListener("scroll", revealSections);

function revealSections(){

for(let i=0;i<reveals.length;i++){

const windowHeight =
window.innerHeight;

const revealTop =
reveals[i].getBoundingClientRect().top;

if(revealTop < windowHeight - 100){

reveals[i].classList.add("active");

}

}

}

/* =========================
   FLOATING LANTERN CLICK
========================= */

const mainLantern =
document.getElementById("mainLantern");

if(mainLantern){

mainLantern.addEventListener("click",()=>{

window.location.href=
"https://kelompok6-design.github.io/product/";

});

}

/* =========================
   MINI GAME
========================= */

const gameArea =
document.getElementById("gameArea");

const scoreText =
document.getElementById("score");

if(gameArea){

let score = 0;

for(let i=0;i<5;i++){

const lantern =
document.createElement("div");

lantern.classList.add("gameLantern");

lantern.innerHTML = "🏮";

lantern.style.left =
Math.random()*80 + "%";

lantern.style.top =
Math.random()*300 + "px";

lantern.onclick = () => {

lantern.remove();

score++;

scoreText.innerHTML =
`${score} / 5`;

if(score === 5){

setTimeout(()=>{

alert(
"✨ Congratulations! You found all lanterns!"
);

window.location.href=
"https://kelompok6-design.github.io/product/";

},500);

}

};

gameArea.appendChild(lantern);

}

}

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
(Math.random()*10 + 15) + "s";

lantern.style.fontSize =
(Math.random()*25 + 25) + "px";

lanternContainer.appendChild(
lantern
);

setTimeout(()=>{

lantern.remove();

},25000);

}

setInterval(createLantern,1500);

/* =========================
   PARALLAX HERO
========================= */

window.addEventListener(
"scroll",
() => {

const hero =
document.querySelector(".hero");

let offset =
window.pageYOffset;

hero.style.backgroundPositionY =
offset * 0.5 + "px";


}
/* =========================
   GO TO PRODUCT WEBSITE
========================= */

function goProduct(){

window.location.href =
"https://kelompok6-design.github.io/product/";

}
);
