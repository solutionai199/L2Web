var CLOSED = false;
var OPEN = false;

function Nav() {
    console.log('hi')
    if (CLOSED) {
        document.getElementById("mySidebar").style.width = "0px";
        document.getElementById("mySidebar").style.border = '0vw solid black';
        CLOSED = false;
        OPEN = true;
        
        document.getElementById("second-sidebar").style.width = "0px";

    } else {
        document.getElementById("mySidebar").style.width = "12vw";
        CLOSED = true;
        document.getElementById("mySidebar").style.border = '0.75vw solid black';
        
        document.getElementById("second-sidebar").style.width = "12vw";
    }

}   

