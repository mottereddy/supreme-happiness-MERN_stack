
const btn = document.getElementById("btn");
const data = document.getElementById("data");

btn.addEventListener("click", fn);

function fn() { 
    let xhr = new XMLHttpRequest();
    xhr.open('get', 'ajax2.json', true);
    xhr.send();
    xhr.onload = function getdata() {

        if (xhr.status === 200) { //here the status will check 
            let result = xhr.responseText;
            // data.innerText = result; //here the data is coming on json format

            result = JSON.parse(result);//here we given the data in json format
            //the json.parse method will convert the string to object
            // console.log(result);

            let str = `<table border = '2'><tr>`;//we are creating a table and assigning to a variable
            for (key in result) {     //it will iterate the keys in json data
                str = str + `<th>${key}</th>` //we are creating a table heading inside the table
                console.log(result);
            }
            str = str + `</tr><tr>`; //we are creating a table row inside the table using string templates
            for (key in result) {  //it will iterate the values in json data
                str = str + `<td>${result[key]}</td>` //we are creating a table column inside the table using string templates
            }
            str = str + `</tr><table>`;//we are closing the table andd column

            data.innerHTML = str;
        } else {
            data.innerHTML = "data not found";
    }

    }
}