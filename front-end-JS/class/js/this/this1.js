


console.log(this);

const obj = {
    name: "anshu",
    age: 5,
    fn:function () {
        console.log(this);
    },
};
obj.fn();

console.log(obj.fn);