//https://jsonplaceholder.typicode.com/todos


let data = {
    user: "chaitu",
    id: 25,
};
let v = fetch("./fetch5.json", {
    method: "PUT",
    body: JSON.stringify(data),
});

v.then(function (p1) { 
    p1.json().then(function (p2) {
        console.log(p2 + "success");
     })
})
v.catch(function (p3) {
    "error" + p3;
 })