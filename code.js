
function openNav() {
  document.getElementById("mySidebar").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
    
  document.getElementById("mySidebar").style.display = "grid";
}

function closeNav() {
  document.getElementById("mySidebar").style.width = "0";
  document.getElementById("main").style.marginLeft= "0";
  document.getElementById("mySidebar").style.display = "none";
}

//var onoff = true;
//
//function hide(){
//    if(var onoff = true){
//        display: none;
//    }
//    else {
//        display-none: false;
//    }
//    
// 
//}