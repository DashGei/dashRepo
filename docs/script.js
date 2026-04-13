const button = document.querySelector("button")
const counter = document.getElementById("counter")
button.addEventListener("click", () => counter.innerHTML++)
localStorage.setitem("counter", counter.innerHTML);