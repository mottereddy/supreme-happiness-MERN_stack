
let p = fetch("https://restcountries.com/v3.1/name/india");
p.then(function (response) {
    response.json().then(function (countryinfo) { 
        console.log(countryinfo);
    })
});


// function name1(response) { 
    
//     console.log(response);
// }
// name1();