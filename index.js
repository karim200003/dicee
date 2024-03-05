let n = Math.floor((Math.random()*6))+1;
console.log(n);
switch (n){
    case 1: document.getElementsByClassName("img1")[0].setAttribute("src","./dice1.png");
    break;
    case 2: document.getElementsByClassName("img1")[0].setAttribute("src","./dice2.png");
    break;
    case 3: document.getElementsByClassName("img1")[0].setAttribute("src","./dice3.png");
    break;
    case 4: document.getElementsByClassName("img1")[0].setAttribute("src","./dice4.png");
    break;
    case 5: document.getElementsByClassName("img1")[0].setAttribute("src","./dice5.png");
    break;
    case 6: document.getElementsByClassName("img1")[0].setAttribute("src","./dice6.png");
    break;
}
let m = Math.floor((Math.random()*6))+1;
console.log(n);
switch (m){
    case 1: document.getElementsByClassName("img2")[0].setAttribute("src","./dice1.png");
    break;
    case 2: document.getElementsByClassName("img2")[0].setAttribute("src","./dice2.png");
    break;
    case 3: document.getElementsByClassName("img2")[0].setAttribute("src","./dice3.png");
    break;
    case 4: document.getElementsByClassName("img2")[0].setAttribute("src","./dice4.png");
    break;
    case 5: document.getElementsByClassName("img2")[0].setAttribute("src","./dice5.png");
    break;
    case 6: document.getElementsByClassName("img2")[0].setAttribute("src","./dice6.png");
    break;
}
if(n>m){
    document.querySelector("h1").textContent = "Player1 win 1️⃣";
}
else if(n<m){
    document.querySelector("h1").textContent = "Player2 win 2️⃣";
}
else{
    document.querySelector("h1").textContent = "Draw 🙂";
}