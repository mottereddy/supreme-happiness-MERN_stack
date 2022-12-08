
let p = fetch("fetch6.js", {
    method: "post",
    body: 'fetch6.json'({
        nname: "chaitu",
        age: "25"
    })
});
p.then(function (data) { 
    console.log(data);
})
p.catch(function (error) { 
    console.log(error);
})