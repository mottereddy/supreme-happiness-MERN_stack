
function ac() { 
    document.getElementById("result").value = "";
};

function show(input) { 
    document.getElementById("result").value+= input;
}
function cal(){
    var output = eval(document.getElementById("result").value);
    document.getElementById("result").value = output;
 }