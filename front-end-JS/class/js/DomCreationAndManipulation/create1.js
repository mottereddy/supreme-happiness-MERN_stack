
const root = document.getElementById("root");
root.innerText = "this is chaitanya";
const newele = document.createElement("p");
root.appendChild(newele);
newele.innerText = "this is vedansh";

// const newele1 = document.createElement("h1");
// newele1.innerText = "this is append";
// newele2 = document.createElement("h2");
// newele2.innerText = "this is append2";
// root.append(newele1, newele2);


root.append(document.createElement("p"), document.createElement("span"));
