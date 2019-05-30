//Main Function
var total = 0;
console.log(total);
var goal = Math.floor(Math.random() * 120) + 19;
//BUG WHERE IT CHOOSES 0
var num1 = Math.floor(Math.random() * 12)+1;
var num2 = Math.floor(Math.random() * 12)+1;
var num3 = Math.floor(Math.random() * 12)+1;
var num4 = Math.floor(Math.random() * 12)+1;
var wins = 0;
var losses = 0;

//Main Function
$(document).ready(function () {
    //Writing to the page
    $("#playerTotal").text(total);
    $("#playerGoal").text(goal);
    $("#winOrLose").text("");
    $("#winner").text("Wins: "+wins);
    $("#loser").text("Losses: "+ losses)

    //On click events for the 4 buttons
    $("#firstRandom").on("click", function () {
        total += num1;
        $("#playerTotal").text(total);
        winLose();
    });
    $("#secondRandom").on("click", function () {
        total += num2;
        $("#playerTotal").text(total);
        winLose();

    });
    $("#thirdRandom").on("click", function () {
        total += num3;
        $("#playerTotal").text(total);
        winLose();

    });
    $("#forthRandom").on("click", function () {
        total += num4;
        $("#playerTotal").text(total);
        winLose();

    });





});
//Win lose function to reset the game
function winLose() {
    if (goal === total) {
        wins++;
        $("#winOrLose").text("You win!!");
        $("#winner").text("Wins: " + wins);
        total = 0;
        goal = Math.floor(Math.random() * (120 - 19) + 19);
        num1 = Math.floor(Math.random() * 13);
        num2 = Math.floor(Math.random() * 13);
        num3 = Math.floor(Math.random() * 13);
        num4 = Math.floor(Math.random() * 13);
        $("#playerGoal").text(goal);
        $("#playerTotal").text(total);


    }
    else if(total>goal){
        losses++;
        $("#winOrLose").text("You lose :(");
        $("#loser").text("Losses: " + losses);
        total = 0;
        goal = Math.floor(Math.random() * (120 - 19) + 19);
        num1 = Math.floor(Math.random() * 13);
        num2 = Math.floor(Math.random() * 13);
        num3 = Math.floor(Math.random() * 13);
        num4 = Math.floor(Math.random() * 13);
        $("#playerGoal").text(goal);
        $("#playerTotal").text(total);

    }
}

