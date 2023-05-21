
    function display(val) {
    document.getElementById("result").value+=val;
    }
    function egal() {
     x=document.getElementById("result").value;
     y=eval(x);
     document.getElementById("result").value=y;   
    }
  function clr ()
  {
    document.getElementById("result").value="";
  }
  function kk() {
  var buttons = document.getElementsByClassName("button");
  for (var i = 0; i < buttons.length; i++) {
    buttons[i].style.backgroundColor = "lightgreen";
  }
}
function kk1() {
    var buttons= document.getElementsByClassName("button");
    for (var i=0;i<buttons.length;i++) {
        buttons[i].style.backgroundColor="cyan";
    }
}
function kk2() {
    var buttons= document.getElementsByClassName("button");
    for (var i=0;i<buttons.length;i++) {
        buttons[i].style.backgroundColor="yellow";
    }
}
function kk3() {
    var buttons= document.getElementsByClassName("button");
    for (var i=0;i<buttons.length;i++) {
        buttons[i].style.backgroundColor="white";
        buttons[i].style.color="black";
    }
}
 

    
    
