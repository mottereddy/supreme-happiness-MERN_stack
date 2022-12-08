
const product = document.getElementById("product");
const add = document.getElementById("add");
const ul = document.getElementById("list");
const ab = document.getElementById("list1");
const cd = document.getElementById("list2");
// console.log(product.value);
add.addEventListener("click", function() {
    ul.innerHTML = ul.innerHTML + `<li>${product.value}</li>`;
    product.value = "";
});

ul.addEventListener("click", function() {
    ab.innerHTML = ab.innerHTML + `<li>${product.value}</li>`;
    product.value = "";
});

ab.addEventListener("click", function() {
    cd.innerHTML = cd.innerHTML + `<li>${product.value}</li>`;
    product.value = "";
});

