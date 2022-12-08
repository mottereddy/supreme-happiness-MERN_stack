


var num = 10;

function abc( ) {
    console.log(num);
    // let num = 20;
    function def() {
        console.log(num);
        var num = 30;
        console.log(num);
    }
    def();
}
abc();



const num = 10;
function abc() {
    console.log(num);
var  num = 10;

}
abc();