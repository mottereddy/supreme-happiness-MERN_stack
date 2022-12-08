
function hfn(anotherFn) {
    let nname = "first ";
    let fname = "class ";
    let aname = "function";
    console.log(nname + fname + aname);
    anotherFn();
        
}
function cfn() { 
    let nname = "call ";
    let fname = "back ";
    let aname = "function";
    console.log(nname + fname + aname);

}
hfn(cfn);