document.querySelector("body").style.backgroundColor = "black";
document.querySelector("input").style.backgroundColor = "black";
document.querySelector("input").style.color = "white";
let v = document.createElement("h1");
v.style.color = "white";

document.querySelector("input").addEventListener("input", function(eve) {
  console.log(eve);
  v.textContent = eve.data;
  document.querySelector("body").appendChild(v);
});