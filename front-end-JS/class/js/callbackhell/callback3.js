
// function step1(call) {
//     setTimeout(() => { console.log("step1") }, 2000);
//     call();
// }
// function step2() {
//     setTimeout(() => { console.log("step2") }, 2000);
// };

// step1(step2);


function step1() { 
    setTimeout(() => {
        console.log("step1")
        setTimeout(() => {
            console.log("step2")
            setTimeout(() => {
                console.log("step3")
                setTimeout(() => {
                    console.log("step4")
                    setTimeout(() => {
                        console.log("step5")
                    }, 1000)
                }, 1000)
            }, 2000)
        }, 2000)
    }, 3000);
}
step1();