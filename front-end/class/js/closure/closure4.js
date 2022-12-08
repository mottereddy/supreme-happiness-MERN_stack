function outerclick() {
    let count = 0;
    function inner() { 
        count = count + 1;
        let click = document.getElementById("click");
        click.innerText = `clicked:${count}`;
    };
    return inner;
};
let clicked = outerclick();
clicked();
console.log(clicked);


