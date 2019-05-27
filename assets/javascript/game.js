var total= 0;
console.log(total);
var goal=Math.floor(Math.random()*(120-19)+19);
var num1 =Math.floor(Math.random()*13);
var num2 =Math.floor(Math.random()*13);
var num3 =Math.floor(Math.random()*13);
var num4 =Math.floor(Math.random()*13);
var wins=0;
var losses=0;

$(document).ready(function(){
    $("#playerTotal").text(total);
    $("#playerGoal").text(goal);
    
    //This might have to be done in another function, might only run when the page opens initially.
    if(total===goal){
        wins++;

    }
    console.log(goal);
    console.log(num1);
    console.log(num2);
    console.log(num3);
    console.log(num4);
    $("#firstRandom").on("click", function(){
        total+=num1;
        $("#playerTotal").text(total);
        //Make function to check if player has won or lost
    });
    $("#secondRandom").on("click", function(){
        total+=num2;
        $("#playerTotal").text(total);
        
    });
    $("#thirdRandom").on("click", function(){
        total+=num3;
        $("#playerTotal").text(total);
        
    });
    $("#forthRandom").on("click", function(){
        total+=num4;
        $("#playerTotal").text(total);
        
    });

    

});

