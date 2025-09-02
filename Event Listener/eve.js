let h1 = document.querySelector("h1");
function my() {
  if (h1.style.color === "red") {
    h1.style.color = "blue";
  } else {
    h1.style.color = "red";
  }
}
h1.addEventListener("click", my);
