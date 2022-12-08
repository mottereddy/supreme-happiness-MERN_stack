
const arr = [
    {
        type: "p",
        content: "this is one",
        attr: {
            onclick: "getData(this)",
            id: 1,
        }
    },
    {
        type: "div",
        content: "this is two",
        attr: {
            onclick: "getData(this)",
            id: 2,
        }
    },
    {
        type: "span",
        content: "this is three",
        attr: {
            onclick: "getData(this)",
            id: 3,
        }
    },
];

const abc = (type) => {
    const ele = document.createElement(type);
};

const res = arr.map((item) => {
    const q = abc(item.type);
});