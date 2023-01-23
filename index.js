// Generate random numbers for dice 1
var randomNumber1 = Math.floor(Math.random()*6)+1;
document.querySelector(".img1").setAttribute('src', "images/dice"+randomNumber1+".png");

// Generate random numbers for dice 2
var randomNumber2 = Math.floor(Math.random()*6)+1;
document.querySelector(".img2").setAttribute("src", "images/dice"+randomNumber2+".png");


