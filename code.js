var CLOSED = true;
var OPEN = false;

function Nav() {
    if (CLOSED) {
        document.getElementById("mySidebar").style.width = "0px";
        CLOSED = false;
        OPEN = true;

    } else {
        document.getElementById("mySidebar").style.width = "12vw";
        CLOSED = true;
    }

}
