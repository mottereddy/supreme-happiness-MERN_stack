//difference between call back hell and prommise

//promise syntax is user friendly and easy to read
//error handling is easier to manage

//call back hell is difficult to understand
//error handling may be hard to manage




function data(p1,q1) {
    q1(p1 + "a very ");
}
function evendata(p2,q2) {
    q2(p2 + "good");
};
function oddData(p3,q3) {
       q3(p3 + " launguage");
}
function evenMoreData(p4,q4) {
    q4(p4+" for front end developers")
}

data("javascript is ", (abc) => {
    evendata(abc, (abc1) => {
        oddData(abc1, (abc2) => {
            evenMoreData(abc2, (abc3) => {
                console.log(abc3);
            })

        })
    })
})



//using promise same program

let q = true;

let p = new Promise(function (resolve, reject) {
    resolve(q);
});

    p.then(()=>{
        console.log('java script')
    })

    p.then(()=>{
        console.log('is a good')
    })
    p.then(()=>{
        console.log('programing launguage');
    })
    p.then(()=>{
        console.log('for front end developer')
    })

p.catch((errorr) => {console.log(errorr)})



