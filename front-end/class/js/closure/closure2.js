function x(num1) { 
    function y(num2) { 
        console.log(num1 + num2);
    };
    return y;

}; 
var z = x(10);
z(20);