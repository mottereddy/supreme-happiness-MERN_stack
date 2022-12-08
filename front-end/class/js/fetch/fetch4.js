

let p = fetch("fetch4.txt");
p.then(function (result) {
    result.text().then(function (output) { console.log(output) });
});
p.catch(function (error = "error") { console.log(error) });