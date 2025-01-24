

const input = document.getElementById("billinput");
const buttons = document.getElementsByClassName("tips");

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', (event) => {
        if (!input.value) return alert("Mongon dungee oruulna uu!")
        const stringButton = buttons[i].innerHTML;
        const numberButton = parseFloat(stringButton);
        const numberInput = Number(input.value);
        let result = (numberInput * numberButton) / 100 + numberInput;
        document.getElementById("total").innerHTML = result;
    })
}

function reset() {
    input.value = ""
}

