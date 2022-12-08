
// function to be used for creating elements in html
const abc= (elementtype,attr,content)=>{
    const ele= document.createElement(elementtype);
    if(attr && Object.keys(attr).length>0){
        for (const key in attr) {
            
                ele.setAttribute(key,attr[key])
            
        }
    }
    if(content){
        ele.innerText=content;
        
    }
    return ele;
}

const root = document.getElementById("root");
//brings data from api
fetch("https://dummyjson.com/products/")

//response execution
.then(res=>res.json())
.then(res=>{console.log(res)
   create();
    function create() {
    
        res.products.map(item => {
     
            const product = abc("div", { id: item.id })
            root.appendChild(product)
            product.appendChild(abc("img", {
                src: item.thumbnail,
                height: '200px',
                width: '200px'
            }))
            // item.images.map(item=>{
            // product.appendChild(abc("img",{src:item}))
            // })
            product.appendChild(abc("h3", { class: "title" }, `title : ${item.title}`))
            product.appendChild(abc("h3", { class: "price" }, `price : ${item.price}`))
            product.appendChild(abc("h3", { class: "rating" }, `Rating : ${item.rating}`))
        
            product.addEventListener("click", () => {
                root.innerText = "";
                const btn = abc('button', { id: 'btn' }, 'back')  
                root.appendChild(btn)
                const product = abc("div", { id: item.id })
                root.appendChild(product)
                product.appendChild(abc("img", {
                    src: item.thumbnail,
                    height: '200px',
                    width: '200px'
                }))
            
                product.appendChild(abc("h3", { class: "title" }, `title : ${item.title}`))
                product.appendChild(abc("h3", { class: "price" }, `price : ${item.price}`))
                product.appendChild(abc("h3", { class: "rating" }, `Rating : ${item.rating}`))