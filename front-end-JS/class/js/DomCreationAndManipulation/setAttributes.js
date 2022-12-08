//here the program is creating the elements,content,and attributes dynamically
//dynamically means the element is adding to html with javascrript

const ele = (type, content, attribute) => {
    const newele = document.createElement(type); //here to create elements
    // return newele;

    if (content) {    //this is used to create the content
        newele.innerText = content;
    }
    // return newele;

    if (Object.keys(attribute)) {  //this is used to create the attributes
        for (const key in attribute) { 
            newele.setAttribute(key, attribute[key]);//here we have set attribute to set the attributes in html
            console.log(key, attribute[key]);
        }
    } return newele;
};

const newElement = ele("div", "this is content", {id:"1",class :"para"});
//type--> all type of html elements is type
//content--> all type of content is in content
//attributs --> attributes looks like key value means id= "main" thus like
//key values present in obj thus why we need to pass in objects 
console.log(newElement);
document.getElementById("root").appendChild(newElement);