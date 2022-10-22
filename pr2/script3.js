//Task 3===========================================================================
const text = "Слава Україні !!!".split("");
const outputElement = document.getElementById("showTextByTime");
let i = 0;
let idInterval = setInterval(() => {
    outputElement.textContent = outputElement.textContent + text[i];
    i++;
}, 1000);

setTimeout(() => {
    clearInterval(idInterval);
}, text.length * 10000);
//=================================================================================