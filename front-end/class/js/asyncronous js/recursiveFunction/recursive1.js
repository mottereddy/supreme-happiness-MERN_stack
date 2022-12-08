
function recursive(number) { 
    console.log("number = ", number);
    const number = number - 1;
    console.log("new number = ", number);
    if (number > 0) {
        console.log(number);
        recursive();
    } else { 
        console.log("error");
    }
};
recursive(5);