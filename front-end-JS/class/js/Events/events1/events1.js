const value = document.getElementById("counterValue");
const inc = document.getElementById("inc");
const dec = document.getElementById("dec");

value.innerText = 10;
const num = value.innerText + 1;
console.log(inc.num);

inc.addEventListener("click", function () {
    value.innerText = parseInt(value.innerText) + 1;
});

dec.addEventListener("click", function () {
    if (parseInt(value.innerText)>0) {
        value.innerText = parseInt(value.innerText) - 1;
    }
});



// num.innerHTML = 'chaitu'
//here the java script inner text is goining to modify the html that is the element coming from
// the html element 
// console.log(num);


