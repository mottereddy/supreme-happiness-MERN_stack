
// const stringName = prompt("Enter any Name = ");
let abc = document.getElementById("name");
var stringName = 'i currently live in banglore';
var namerev = "";
function rev() {
    for (let i = stringName.length-1; i >= 0; i--) { 
        namerev= namerev+stringName[i];
    }
    return ("reversed string = " +namerev);
};
const xyz = rev();
console.log(xyz);

abc.innerText = xyz;