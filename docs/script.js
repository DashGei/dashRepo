const counter = document.getElementById("counter");
const addButton = document.getElementById("addButton");
const resetButton = document.getElementById("resetButton");

let saved = localStorage.getItem("counterValue");
counter.innerHTML = saved ? saved : "0";

addButton.addEventListener("click", () => {
    let current = Number(counter.innerHTML);
    current++;
    counter.innerHTML = current;
    
    localStorage.setItem("counterValue", current.toString());
});

resetButton.addEventListener("click", () => {
    let zero = 0;
    
    counter.innerHTML = 0;
    const audio = new Audio('images/register.mp3');
    audio.play();
    localStorage.setItem("counterValue", zero.toString());
});

