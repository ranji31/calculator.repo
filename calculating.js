//show the pressed value at textbox area
function display(value){
    document.getElementById('final').value += value;
}
//clear the value
function clear(){
    document.getElementById('final').Value="";
}
//calculating process
function equal(){
    
    a = a+b && a-b && a*b && a/b;
    b = a;
    var a = document.getElementById("final").value;
    var b = eval(a);
    document.getElementById("final").value= b;
     if (a&&b != b&&a);
      alert("your answer is...")
}
