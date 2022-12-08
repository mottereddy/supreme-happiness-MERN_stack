function x(){ 
    var a = 100;
    function y() { 
        var b = 200;
        console.log(a + b);

    };
    return y();
};
x();
