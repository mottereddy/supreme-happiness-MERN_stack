
function validate() { 
    var text = document.querySelectorAll("box").values

    var regx = /^$/;
    if (regx.test(text)) {
        console.log("equal")
    } else { 
        console.log("not equal")
    }
}
validate();