
let root = document.getElementById("root");


let f = fetch("https://restcountries.com/v3.1/name/india");

f.then(res => { 
    return res.json();
})

    .then(function (fnres) {
        console.log(fnres[0].flags.png);
        const e = document.createElement("img");
        e.setAttribute("src", "fnres[0].flags.png");
        // root.appendChild(e);
        // root.append("hello");
     })
