let promise1 = fetch("https://restcountries.com/v3.1/name/india");
promise1.then(function (respone) {
    respone.json().then(function (outputresponse) {
        console.log(typeof respone)
        console.log(respone)
        console.log(outputresponse);
    })
});