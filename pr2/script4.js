//Task 4===========================================================================
let bet = +prompt("Введіть ставку: ");

while (bet <= 0 || isNaN(bet)) {
    alert("Введіть коректну суму");
    bet = +prompt("Введіть ставку: ");
}

setTimeout(() => {
    if (randNumber <= 0) document.write("Ви програли");
    else document.write(`Ви виграли: ${bet * randNumber}`);
}, 1000);

const randNumber = Math.floor(Math.random() * (10 - -10 + 1) - 10);
console.log(randNumber);
//=================================================================================