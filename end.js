let name = sessionStorage.getItem("name");
let points = sessionStorage.getItem("points");
let time = sessionStorage.getItem("time");

document.querySelector(".name").innerHTML = name;
document.querySelector(".points").innerHTML = points;
document.querySelector(".time").innerHTML = time;

