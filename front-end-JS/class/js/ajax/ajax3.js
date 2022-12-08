
const btn = document.getElementById("btn");
const disply = document.getElementById("display");

btn.addEventListener("click", fn);

function fn() { 
    const xhr = new XMLHttpRequest();
    xhr.open('get', 'ajax2.json', 'true');
    xhr.send();
    // xhr.onprogress = function () {
    //     disply.innerText = "Loading....";
    // };

    xhr.onload = function () {
        let result = xhr.responseText;
        let jres = JSON.parse(result);
        console.log(jres.name);
        disply.innerHTML = jres;  
    };
};