
//user
function validateUser() { 
    var textUser = document.getElementById("textUser").value;
   
    var regx = /^([a-zA-Z0-9\.@]{5,12})$/;
    if (regx.test(textUser)) {
        document.getElementById("lbltxtUser").innerHTML = "valid";
        document.getElementById("lbltxtUser").style.visibility = "visible";
        document.getElementById("lbltxtUser").style.color = "green";
    } else{ 
        document.getElementById("lbltxtUser").innerHTML = "Required and must be of length 5 to 12";
        document.getElementById("lbltxtUser").style.visibility = "visible";
        document.getElementById("lbltxtUser").style.color = "red";
    }
}

//password
function validatePass() { 
    var textPass = document.getElementById("textPass").value;
   
    var regx = /^([a-zA-Z0-9\.@]{7,12})$/;
    if (regx.test(textPass)) {
        document.getElementById("lbltxtPass").innerHTML = "valid";
        document.getElementById("lbltxtPass").style.visibility = "visible";
        document.getElementById("lbltxtPass").style.color = "green";
    } else{ 
        document.getElementById("lbltxtPass").innerHTML = "Required and must be of length 7 to 12";
        document.getElementById("lbltxtPass").style.visibility = "visible";
        document.getElementById("lbltxtPass").style.color = "red";
    }
}
//Name
function validateName() { 
    var textName = document.getElementById("textName").value;
   
    var regx = /^([a-zA-Z\.@]{3,9})$/;
    if (regx.test(textName)) {
        document.getElementById("lbltxtName").innerHTML = "valid";
        document.getElementById("lbltxtName").style.visibility = "visible";
        document.getElementById("lbltxtName").style.color = "green";
    } else{ 
        document.getElementById("lbltxtName").innerHTML = "Required alphabets only";
        document.getElementById("lbltxtName").style.visibility = "visible";
        document.getElementById("lbltxtName").style.color = "red";
    }
}

//Address
function validateAdd() { 
    var textAdd = document.getElementById("textAdd").value;
   
    var regx = /^([a-zA-Z0-9\.@]{7,12})$/;
    if (regx.test(textAdd)) {
        document.getElementById("lbltxtAdd").innerHTML = "optional";
        document.getElementById("lbltxtAdd").style.visibility = "visible";
        document.getElementById("lbltxtAdd").style.color = "green";
    } else{ 
        document.getElementById("lbltxtAdd").innerHTML = "optional";
        document.getElementById("lbltxtAdd").style.visibility = "visible";
        document.getElementById("lbltxtAdd").style.color = "red";
    }
}

// country

    function validatecountry() {
        var textCountry = document.getElementById("textCountry");
   
        if (textCountry.checked == "") {
            document.getElementById("lbltxtcountry").innerHTML = "optional";
            document.getElementById("lbltxtcountry").style.visibility = "visible";
            document.getElementById("lbltxtcountry").style.color = "green";
        } else if(textCountry.checked == "INDIA") {
            document.getElementById("lbltxtcountry").innerHTML = "Must select Country";
            document.getElementById("lbltxtcountry").style.visibility = "visible";
            document.getElementById("lbltxtcountry").style.color = "red";
        } else{
            document.getElementById("lbltxtcountry").innerHTML = "Must select Country";
            document.getElementById("lbltxtcountry").style.visibility = "visible";
            document.getElementById("lbltxtcountry").style.color = "green";
        }
    }

    //zipcode
    function validateZip() {
        var textzip = document.getElementById("textzip").value;
   
        var regx = /^([0-9]{1,12})$/;
        if (regx.test(textzip)) {
            document.getElementById("lbltxtZip").innerHTML = "valid";
            document.getElementById("lbltxtZip").style.visibility = "visible";
            document.getElementById("lbltxtZip").style.color = "green";
        } else {
            document.getElementById("lbltxtZip").innerHTML = "Must Be Numeric Only";
            document.getElementById("lbltxtZip").style.visibility = "visible";
            document.getElementById("lbltxtZip").style.color = "red";
        }
    }

    //email
    function validate() {
        var text = document.getElementById("text").value;

        var regx = /^([a-zA-Z0-9\.@]{3,9})$/;
        if (regx.test(text)) {
            document.getElementById("lbltext").innerHTML = "valid";
            document.getElementById("lbltext").style.visibility = "visible";
            document.getElementById("lbltext").style.color = "green";
        } else {
            document.getElementById("lbltext").innerHTML = "Required must be a valid email";
            document.getElementById("lbltext").style.visibility = "visible";
            document.getElementById("lbltext").style.color = "red";
        }
    }


    //Gender
    function validateGender() {
        var genders = document.getElementsByName("gender");
        if (genders[0].checked == true) {

            var msg1 = "valid";
            document.getElementById('msg').innerHTML = msg1;
            document.getElementById("msg").style.color = "green";
        } else if (genders[1].checked == true) {

            var msg2 = "valid";
            document.getElementById('msg').innerHTML = msg2;
            document.getElementById("msg").style.color = "green";
        } else {
            // no checked
            var msg = '<span style="color:red;">You must select your gender!</span><br /><br />';
            document.getElementById('msg').innerHTML = msg;
            return false;
        }
        return true;
    }

    function reset_msg() {
        document.getElementById('msg').innerHTML = '';
    }
        
    //language
    function validateLang() {
        var langs = document.getElementsByName("lang");
        if (langs[0].checked == true) {

            var msg1 = "valid";
            document.getElementById('lbltxtlang').innerHTML = msg1;
            document.getElementById("lbltxtlang").style.color = "green";
        } else if (langs[1].checked == true) {

            var msg2 = "valid";
            document.getElementById('lbltxtlang').innerHTML = msg2;
            document.getElementById("lbltxtlang").style.color = "green";
        } else {
            // no checked
            var msg = '<span style="color:red;">You must select your Launguage!</span><br /><br />';
            document.getElementById('lbltxtlang').innerHTML = msg;
            return false;
        }
        return true;
    }

    function revalid() {
        document.getElementById('msg').innerHTML = '';
    }


    //about
    function validateabout() {
        var textAbout = document.getElementById("textAbout").value;

        var regx = /^([a-zA-Z0-9\.@]{3,20})$/;
        if (regx.test(textAbout)) {
            document.getElementById("lbltxtabt").innerHTML = "Optional";
            document.getElementById("lbltxtabt").style.visibility = "visible";
            document.getElementById("lbltxtabt").style.color = "green";
        } else {
            document.getElementById("lbltxtabt").innerHTML = "Optional";
            document.getElementById("lbltxtabt").style.visibility = "visible";
            document.getElementById("lbltxtabt").style.color = "red";
        }
    }

