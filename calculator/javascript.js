

const input = document.getElementById("billinput");
// const tip = document.getElementById("tipbuttons");
const buttons = document.getElementsByClassName("tips");

for (let i = 0 ; i < buttons.length ; i++){
        buttons[i].addEventListener('click',(event)=>{
            if (!input.value) return alert("Mongon dungee oruulna uu!")
            const stringButton =buttons[i].innerHTML;
            const numberButton = parseFloat(stringButton); 
            // const numberButton = stringButton.replace("%",""); 
            // const numberInput = parseFloat(input.value); 
            const numberInput = Number(input.value); 
            let result = (numberInput * numberButton) / 100 + numberInput;
            document.getElementById("total").innerHTML = result;           
        })
    }
  

function reset () {
    input.value = ""
}

// tip.addEventListener('click', function () {
//     // console.log(input.value, typeof input.value) /// garaaas oruulj baigaa utga
//     })
  

// function reset () {
//     input.value = ""
// }

// function extractNumbers(text) { 
//  let numbers = "" 
//  for (let i = 0; i < str.length; i++) 
//  {  if (!isNaN(str[i])) {   numbers += str[i];  } } 
//  console.log(numbers)}let str = document.getElementById("tipbuttons").innerText;
//  console.log(str);
//  extractNumbers(str); /// stringees toog salgaj avah
// const text = document.getElementById("tipbuttons").innerTextconsole.log(text) /// huviig ni hevleh
