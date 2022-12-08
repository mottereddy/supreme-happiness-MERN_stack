
const inputdata = document.getElementById("inputdata");
const nameOutput = document.getElementById("nameOutput");


// nameOutput.style.color = 'red'
function submit() { 
    nameOutput.innerText = inputdata.value;
    inputdata.value = "";
}

 function colorchange(a) {
    nameOutput.style.color = a;
    nameOutput.style.color = a;
    nameOutput.style.color = a;
    
}
 
function fontstyle(f) { 
    nameOutput.style.fontFamily = f;
    nameOutput.style.fontFamily = f;
    nameOutput.style.fontFamily = f;

}

// const color1 = document.getElementById("color1")

// function colorchange1() { 
//     nameOutput.innerText=color1.html
// }

// const color2 = document.getElementById("color2")
// function colorchange2() { 
//     nameOutput.innerText=color2.html
// }
// const color3 = document.getElementById("color3")
// function colorchange3() { 
//     nameOutput.innerText=color3.html
// }