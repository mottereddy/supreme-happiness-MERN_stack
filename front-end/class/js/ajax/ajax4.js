
let btn = document.getElementById("btn");
let result1 = document.getElementById('result');

btn.addEventListener('click', fn);

function fn() {
    let xhr = new XMLHttpRequest();
    xhr.open('get','ajax4.json','true');
    xhr.send();
    xhr.onload = function () {
        let result = xhr.responseText;
        let jresult = JSON.parse(result);
        result1.innerHTML = jresult;  

        console.log(jresult[0].name);
        console.log(jresult[1].age);
        console.log(jresult.name)
     
    }
}

// let obj = {
//     nname: "chaitu",
//     aage: "25",
//     ccity: "chennai",
// },{ 

// }
// console.log(obj.nname);