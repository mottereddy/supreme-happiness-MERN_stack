
let genfn = (eletype, attr, content) => {
    const ele = document.createElement(eletype);
    if (attr && Object.keys(attr).length > 0) {
        for (const key in attr) {
            ele.setAttribute(key, attr[key]);
        }
    }
    if (content) {
        ele.innerText = content;
    }
    return ele;
}
let root = document.getElementById("root");

let manu = fetch("https://dummyjson.com/products")
manu.then((getData) => {
    return getData.json()
})
    .then(newgetData => {
        newgetData.products.map(arrayData => {
            const productdiv = genfn("div", { id: arrayData.id });
            root.appendChild(productdiv);
            const imgele = genfn("img", {
                src:arrayData.thumbnail, //we are assinging the img data from products to img element
                height: "250px",
                width: "500px",
                
            });
            productdiv.appendChild(imgele);
            
            const title = genfn("h3", { class:'title'},arrayData.title)
            productdiv.appendChild(title);

            const price = genfn("h3",undefined, `price : ${arrayData.price}`);
            productdiv.appendChild(price);          

        })
    });




    
// console.log(manu);
    // .then(res => res.json())
    // .then(res => res.products.map(data => {
    //     let product_div = genfn("div", { id: `item ${data.id}` });
    //     root.appendChild(product_div);
    // }));