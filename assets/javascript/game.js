var total = 0;
console.log(total);
var goal = Math.floor(Math.random() * (120 - 19) + 19);
var num1 = Math.floor(Math.random() * 13);
var num2 = Math.floor(Math.random() * 13);
var num3 = Math.floor(Math.random() * 13);
var num4 = Math.floor(Math.random() * 13);
var wins = 0;
var losses = 0;

$(document).ready(function () {
    $("#playerTotal").text(total);
    $("#playerGoal").text(goal);
    $("#winOrLose").text("");
    $("#winner").text("Wins: "+wins);

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

function winLose() {
    if (goal === total) {
        wins++;
        $("#winOrLose").text("You win!!");
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

