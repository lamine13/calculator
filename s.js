


function forclear() {
    document.getElementById("saisie").innerHTML = "0";
}




function removeZero() {
    var value = document.getElementById("saisie").innerHTML;
    if (value == "0") {
         value = " "
         document.getElementById("saisie").innerHTML = value;
    }
}




function perc() {
    var value = document.getElementById("saisie").innerHTML;
    value = value / 100;
    document.getElementById("saisie").innerHTML = value;
}





function fordisplay(value) {
    removeZero()
    document.getElementById("saisie").innerHTML += value;
  
}



function racine() {
    removeZero()
    var value = document.getElementById("saisie").innerHTML;
        value = Math.sqrt(value);
        value= value.toFixed(2);
   
    document.getElementById("saisie").innerHTML = value;

}

function sin() {
    removeZero()
    var value = document.getElementById("saisie").innerHTML;
        value = Math.sin(value);
        value= value.toFixed(2);
   
    document.getElementById("saisie").innerHTML = value;

}
function cos() {
    removeZero()
    var value = document.getElementById("saisie").innerHTML;
        value = Math.cos(value);
        value= value.toFixed(2);
   
    document.getElementById("saisie").innerHTML = value;

}
function tan() {
    removeZero()
    var value = document.getElementById("saisie").innerHTML;
        value = Math.tan(value);
        value= value.toFixed(2);
   
    document.getElementById("saisie").innerHTML = value;

}


function solve() {
    removeZero()
    var equation = document.getElementById("saisie").innerHTML;
    
    var solved = eval(equation);
    document.getElementById('saisie').innerHTML = solved;
    

}
