
function abc() {
    return new Promise((res) => {
        setTimeout(() => {res("executed");},1000);
    });
};

async function xyz() {   
    console.log("program");
    let v1 = await abc(); //here the abc function is asyncronous thus why we used async and await
    console.log(v1);
};
xyz();

//another method we can write this like also

// function xyz() {   
//     console.log("program");
//     abc().then((res) => {console.log(res); })
//     //here the abc function is asyncronous thus why we used async and await
    
// };
// xyz();