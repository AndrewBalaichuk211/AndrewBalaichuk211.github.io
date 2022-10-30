/*За допомогою javascript помістити 1-й абзац в елемент таблиці No1; другий - в комірку
таблиці No4; третій - в клітинку таблиці No7. Малюнок перемістити над таблицею.*/

const elp = document.querySelectorAll("p");
const elbtn = document.getElementById("startbtn");
const eltb = document.querySelector("table");
const elpict = document.querySelector(".image");

elbtn.addEventListener("click", () => {
    const rows = eltb.tBodies[0].rows;

    for (let i = 0; i < rows.length; i++)
        rows[i].cells[0].insertAdjacentElement("afterbegin", elp[i]);

    eltb.insertAdjacentElement("beforebegin", elpict);
});
