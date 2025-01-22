// const btn = document.createElement("button");
// btn.innerHTML = "Click me!";
// btn.style.height = 40 + "px"
// btn.style.width = 80 + "px";
// btn.style.borderRadius = 16 + "px"
// btn.style.backgroundColor = "grey";
// btn.onclick = changedColor();
// document.body.appendChild(btn);

function changedColor() {
    document.getElementById("test").style.backgroundColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
}