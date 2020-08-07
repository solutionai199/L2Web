var CLOSED = false;
var OPEN = false;

function Nav() {
    console.log('working?')
    if (CLOSED) {
        document.getElementById("mySidebar").style.width = '0px';
        document.getElementById("mySidebar").style.border = '0vw solid black';
        document.getElementById("box").style.margin = '2vw 1.25vw 1.25vw';
        CLOSED = false;
        OPEN = true;

        document.getElementById("second-sidebar").style.width = "0px";

    } else {
        document.getElementById("mySidebar").style.width = "12vw";
        CLOSED = true;
        document.getElementById("mySidebar").style.border = '0.75vw solid black';
        document.getElementById("second-sidebar").style.width = '12vw';
        document.getElementById("box").style.margin = '2vw 3.25vw 1.25vw';
    }

}

var quizQuestions = ['What is my favourite color?', //1
                     'what is my favourite subject?', //2
                     'what time is it?']; //3

var answers = [
    [
    'Red', //1
     'green' //2
    ], // [1][1-2]
    [
    'not maths', //1
    'dtc' //2
    ], //[2][1-2]
    [
    'time', //1
    'lunch time' //2
    ] //[3][1-2]
    ];



function loadQuestions() {
    console.log('please work');
    var randQ = Math.floor(Math.random() * quizQuestions.length);
    document.getElementById('questions').innerHTML = quizQuestions[randQ];
    
    for(var i=0;i<3;i++){
        document.getElementById('answer-btn1' +i).innerHTML = answers[randQ][i];
    }
}

function check() {
    console.log('yep');
}

window.onload = function() {
    loadQuestions();

}
