
let count = 0;
function date() { 
    count = +1;
    document.getElementById("time").innerHTML = count;
    console.log(count);
}
let id = setTimeout(date, 4000);


