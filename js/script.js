function printNumber(numero){
    document.getElementById("datos").value=document.getElementById("datos").value+numero.value;
}

function clearInput(){
    document.getElementById("datos").value="";
}

function printOperation(operador){
    let num1=parseFloat(document.getElementById("datos").value);
    
}