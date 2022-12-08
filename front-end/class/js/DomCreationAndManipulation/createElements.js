//passing elements using js to html
//create calculator keyboard


const newele = (type, content, attr) => {
    const button1 = document.createElement(type);
    
    if (content) { 
        button1.innerText = content;
    }
    if (attr&&Object.keys(attr).length>0) { 
        for (const key in attr) { 
            button1.setAttribute(key, attr[key]);
        }
    }
    return newele;
};

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, '0'];
arr.map((item) => {
    const p = newele("button", item, { id: "1" });
    document.getElementById("root").appendChild(p);
});
