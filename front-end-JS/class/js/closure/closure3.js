let count = 0;
function clickedcount() {
   
    count = count + 1;
    let click = document.getElementById("click");
    click.innerText = `clicked:${count}`;
}
