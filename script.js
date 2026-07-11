function showPage(pageId){

let pages=document.querySelectorAll(".page");

pages.forEach(function(page){

page.classList.remove("active");

});

document.getElementById(pageId).classList.add("active");

}

function openGift(){

document.getElementById("giftMessage").style.display="block";

}
function makeCake(){

let flour=document.getElementById("flour").value;
let sugar=document.getElementById("sugar").value;
let flavor=document.getElementById("flavor").value;
let topping=document.getElementById("topping").value;

document.getElementById("cakeResult").style.display="block";

document.getElementById("cakeText").innerHTML=
"Made with <b>"+flour+
"</b><br>"+sugar+
"<br>Flavor: <b>"+flavor+
"</b><br>Topping: <b>"+topping+
"</b><br><br>Enjoy your special birthday cake! 🎉❤️";

}
// ===========================
// Tic Tac Toe
// ===========================

let board = ["","","","","","","","",""];

let currentPlayer = "X";

const wins = [

[0,1,2],
[3,4,5],
[6,7,8],

[0,3,6],
[1,4,7],
[2,5,8],

[0,4,8],
[2,4,6]

];

function play(cell,index){

if(board[index]!="") return;

board[index]=currentPlayer;

cell.innerHTML=currentPlayer;

for(let combo of wins){

let a=combo[0];
let b=combo[1];
let c=combo[2];

if(board[a] &&
board[a]==board[b] &&
board[b]==board[c]){

document.getElementById("result").innerHTML=
currentPlayer+" Wins! 🎉❤️";

return;

}

}

if(!board.includes("")){

document.getElementById("result").innerHTML=
"It's a Draw! 🤝";

return;

}

if(currentPlayer=="X"){

currentPlayer="O";

}else{

currentPlayer="X";

}

}

function resetGame(){

board=["","","","","","","","",""];

currentPlayer="X";

document.querySelectorAll(".cell").forEach(function(cell){

cell.innerHTML="";

});

document.getElementById("result").innerHTML="";

}
let picked = false;

const prizes = [

"💖 Perfume! You're lucky! 🌸",

"😂 Kuch nahi mila! Better luck next time!",

"🍫 Sirf chocolate ke liye paise hain! 😂"

];

function pickGift(box){

if(picked) return;

picked = true;

const random = Math.floor(Math.random()*prizes.length);

box.innerHTML="🎉";

document.getElementById("giftResult").innerHTML=prizes[random];

}
async function startListening(){

try{

const stream = await navigator.mediaDevices.getUserMedia({audio:true});

const audioContext = new AudioContext();

const source = audioContext.createMediaStreamSource(stream);

const analyser = audioContext.createAnalyser();

source.connect(analyser);

const data = new Uint8Array(analyser.fftSize);

function detect(){

analyser.getByteTimeDomainData(data);

let sum = 0;

for(let i=0;i<data.length;i++){

let x = (data[i]-128)/128;

sum += x*x;

}

let volume = Math.sqrt(sum/data.length);

if(volume > 0.12){

document.getElementById("flame").style.display="none";

document.getElementById("wishMessage").innerHTML =
"🎉 Happy Birthday! Make a wish! ❤️";

stream.getTracks().forEach(track => track.stop());

return;

}

requestAnimationFrame(detect);

}

detect();

}catch(err){

alert("Please allow microphone access.");

}

}