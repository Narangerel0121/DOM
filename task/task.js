const ballElRef = document.createElement("div");
// ballElRef.innerText = "1";
// ballElRef.style.height = 100 + "px";
// ballElRef.style.width = 100 + "px";
// ballElRef.style.borderRadius = 50 + "%";
// ballElRef.style.backgroundColor = "yellow";
// ballElRef.style.alignContent = "center";
// ballElRef.style.textAlign = "center";
// document.body.appendChild(ballElRef);

let number = Number(ballElRef.innerText)
for(let i = 0; i < 100; i++) {
number = i + 1;
const ballElRef = document.createElement("div");
ballElRef.innerText = number;
ballElRef.style.height = 100 + "px";
ballElRef.style.width = 100 + "px";
ballElRef.style.borderRadius = 50 + "%";
ballElRef.style.backgroundColor = "yellow";
ballElRef.style.alignContent = "center";
ballElRef.style.textAlign = "center";
document.body.appendChild(ballElRef);
}

