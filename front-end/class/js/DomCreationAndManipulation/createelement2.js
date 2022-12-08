//here we used arrow function to create elements
const genEle = (type) => {
    const ele = document.createElement(type);
    return ele;
};
const new1 = genEle("div");
const new2 = genEle("sapn");
console.log(new1, new2); // it will create elements

//here we used normal function to create elements
const genEle1 = function (type) {
    const ele = document.createElement(type);
    return ele;
};
const new11 = genEle("h1");
const new22 = genEle("h2");
console.log(new11, new22); // it will create elements
