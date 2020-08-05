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

var quizQuestions = ['What is my favourite color?', 'what is my favourite subject?'];



function questions() {
    console.log('please work');
    var randQ = Math.floor(Math.random()*quizQuestions.length);
    document.getElementById('questions').innerHTML = quizQuestions[randQ];
}

function check() {
    console.log('yep');
}