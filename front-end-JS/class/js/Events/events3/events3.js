const input = document.getElementById("inp");
const btn = document.getElementById("btn");
const list = document.querySelectorAll(".files");
btn.addEventListener("click", function () {
    list[0].innerHTML += `<li onclick="progress(event,this,'${input.value}')">${input.value}</li>`;
    input.value = "";
});
function progress(e ,a, lis) {
    a.remove();
    list[1].innerHTML += `<li onclick="complete(event,this,'${lis}')">${lis}</li>`;
}
function complete(e,a,lis1) {
    a.remove();
    list[2].innerHTML += `<li>${lis1}</li>`;
}
function remove() {
    a.remove();
}