//the time changes after every 3 seconds


function showTime() { 
    let time = new Date();
    let dateTime = time.toLocaleTimeString();//.toLocaleTimeString() method
    console.log(dateTime);
    document.getElementById("time").innerHTML = dateTime;
    let date = time.toLocaleDateString();//toLocaleDateString()
    document.getElementById("date").innerHTML = date;
    let id = setTimeout(showTime, 1000);//setTimeOut call function

    clearTimeout(id);//cleartimeout is used to stop the timer
};
showTime();