
let btn = document.getElementById("btn"); 
let visible = document.getElementById("visible"); 

btn.addEventListener("click", fn);

function fn() {
    let xhr = new XMLHttpRequest(); //here we are assigning the xmlhttprequest to variable xhr
    xhr.open('get', 'ajax1.txt', true);
    console.log('opem');
    //the open is an method to get the data from the server
    //it has 5 parameters in that 3 is mandatory and 2 is optional 
    //the 5 paremeters in open are (get/post,location/url, true/false, username.password)
    
    xhr.send();//here the send is used to send the data to server

    xhr.onprogress = function () {
        visible.innerText = "Loading....";
    }
    xhr.onload = function () {
        visible.innerText = xhr.responseText;
    }
}