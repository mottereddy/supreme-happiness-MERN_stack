
let p = fetch("fetch5.json");
p.then(function (data) { 
   data.json().then(function (outputresponse) { 
        console.log(outputresponse);
    })


})