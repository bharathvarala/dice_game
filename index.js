// alert("Hi");
function randomDice(){
    var randNum1 = Math.floor(Math.random()*6) + 1;
    var randDice1 = "images/dice" + randNum1 + ".png";
    document.querySelectorAll("img")[0].setAttribute("src",randDice1);

    var randNum2 = Math.floor(Math.random()*6) + 1;
    var randDice2 = "images/dice" + randNum2 + ".png";
    document.querySelectorAll("img")[1].setAttribute("src",randDice2);

    if(randNum1>randNum2){
        document.getElementById("winner").innerHTML = "The winner is Player 1!!"
    }
    else if(randNum2>randNum1){
        document.getElementById("winner").innerHTML = "The winner is Player 2!!"
    }
    else{
        document.getElementById("winner").innerHTML = "It's a tie!!"
    }
}