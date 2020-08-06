/***********/
//  STEP 1
/***********/
// Code for generating a random number
var randomNumber1 = Math.random();
randomNumber1 = Math.floor(randomNumber1 * 6);
randomNumber1 = randomNumber1 + 1;
//console.log(randomNumber1);
 
var randomNumber2 = Math.random();
randomNumber2 = Math.floor(randomNumber2 * 6);
randomNumber2 = randomNumber2 + 1;
//console.log(randomNumber2);
 
 
 
/***********/
//  STEP 2
/***********/
// picking a random image using "randomNumber1" variable
var randomImage1 = "images/dice"+randomNumber1+".png";
var randomImage2 = "images/dice"+randomNumber2+".png";
 
// placing the randomly selected image under class "img1"
//var randomDice1 = document.getElementsByClassname("img1")[0].setAttribute("src",randomImage1);
var randomDice1 = document.querySelectorAll("img")[0].setAttribute('src',randomImage1);
var randomDice2 = document.querySelectorAll("img")[1].setAttribute('src',randomImage2);
 
 
/***********/
//  STEP 3
/***********/
if(randomNumber1>randomNumber2)
{
  document.querySelector("h1").innerHTML = "Player 1 Wins!";
}
else if(randomNumber1<randomNumber2){
  document.querySelector("h1").innerHTML = "Player 2 Wins!";
}
else
{
  document.querySelector("h1").innerHTML = "Its Draw!";
}