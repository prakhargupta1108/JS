// Typing Effect
const text="Neha, you are my today, my tomorrow and my forever ❤️";
let i=0;
function typeEffect(){
if(i<text.length){
document.getElementById("typing").innerHTML+=text.charAt(i);
i++;
setTimeout(typeEffect,60);
}
}
typeEffect();

// Love Counter
const startDate=new Date("2023-01-01");
const today=new Date();
const diff=Math.floor((today-startDate)/(1000*60*60*24));
document.getElementById("loveDays").innerText=diff+" Days of Love ❤️";

// Surprise
function showSurprise(){
document.getElementById("hiddenMessage").innerText=
"Neha ❤️ You are the best thing that ever happened to me. I Love You Forever!";
}

// Moving No Button
const noBtn=document.querySelector(".no");
noBtn.addEventListener("mouseover",function(){
this.style.position="absolute";
this.style.left=Math.random()*80+"%";
this.style.top=Math.random()*80+"%";
});

// Yes Button Heart Explosion
const yesBtn=document.querySelector(".yes");
yesBtn.addEventListener("click",function(){
for(let i=0;i<20;i++){
let heart=document.createElement("div");
heart.innerHTML="💖";
heart.classList.add("heart");
heart.style.left=Math.random()*window.innerWidth+"px";
heart.style.top=window.innerHeight-100+"px";
document.body.appendChild(heart);
setTimeout(()=>heart.remove(),1000);
}
alert("Yayyy ❤️ Forever With Neha!");
});

// Scroll Reveal
const faders=document.querySelectorAll(".fade-in");
const observer=new IntersectionObserver(entries=>{
entries.forEach(entry=>{
if(entry.isIntersecting){
entry.target.classList.add("show");
}
});
});
faders.forEach(section=>observer.observe(section));

// Enable Video Sound on First Click
document.addEventListener("click",function(){
const video=document.getElementById("loveVideo");
if(video){
video.muted=false;
video.play();
}
},{once:true});