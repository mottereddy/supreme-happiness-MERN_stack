const grandParent = document.getElementById("grandParent")
    .addEventListener("click",(e) => {
        // e.stopPropagation();
        console.log('grandparent');
    },);

const parent = document.getElementById("parent")
    .addEventListener("click", (e) => {
                console.log('parent');
},);

const child = document.getElementById("child")
    .addEventListener("click", (e) => {
                console.log('child');

    },);

    const child1 = document.getElementById("child1")
    .addEventListener("click", (e) => {
                console.log('child1');

    },);