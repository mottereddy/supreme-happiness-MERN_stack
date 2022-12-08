// //by default it will be false only
// //if we use stoppropagation method then it will stops

const grandParent = document.getElementById("grandParent")
    .addEventListener("click",(e) => {
        // e.stopPropagation();
        console.log('green');
    },true);

const parent = document.getElementById("parent")
    .addEventListener("click", (e) => {
                console.log('red');
},true);

const child = document.getElementById("child")
    .addEventListener("click", (e) => {
                console.log('blue');

},true);


//---------------------------------------------------------------------------------------------



