function a() { 
    let a = 100;
    function b() { 
        let b = 200;
        function c() { 
            let c = 300;
            console.log(a + b + c);
        }; c();
    }; b();
}a();
