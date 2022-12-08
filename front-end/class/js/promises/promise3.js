const fn = new Promise((good, bad) => { 
    let x = 10;
    let y = 20;
    if (x + y == 30) {
        good([1,2,3,4,5,6]);
    } else { 
        bad([5,6,7,8,9]);
    };

})

fn.then(function (resolved) { 
    console.log(resolved);
})
fn.catch(function (reject) { 
    console.log(reject);
})