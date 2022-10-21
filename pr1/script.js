document.write("<h1>Практична робота 1</h1>");

//Task 1===========================================================================
let first_arr = ["a", "b", "c"];
let second_arr = [1, 2, 3];
document.write("<h2>Завдання 1</h2>");
document.write(`Масив 1: ${first_arr.toString()}<br>`);
document.write(`Масив 2: ${second_arr.toString()}<br>`);
document.write(`Результат об'єднання: ${first_arr.concat(second_arr).toString()}`);
//=================================================================================

//Task 2===========================================================================
document.write("<h2>Завдання 2</h2>");
let arr = ["a", "b", "c"];
document.write(`Масив: ${arr.toString()}<br>`);
arr.push(1, 2, 3);
document.write(`Результат додавання чисел 1,2,3: ${arr.toString()}`);
//=================================================================================

//Task 3===========================================================================
document.write("<h2>Завдання 3</h2>");
let arr_for_reverse = [1, 2, 3];
document.write(`Масив: ${arr_for_reverse.toString()}<br>`);
document.write(`Реверс масиву: ${arr_for_reverse.reverse().toString()}`);
//=================================================================================

//Task 4===========================================================================
document.write("<h2>Завдання 4</h2>");
let arr_find_last = ["js", "css", "jq"];
document.write(`Останній елемент масиву {${arr_find_last.toString()}}: ${arr_find_last[arr_find_last.length - 1]}`);
//=================================================================================

//Task 5===========================================================================
document.write("<h2>Завдання 5</h2>");
let arr_for_slice = [1, 2, 3, 4, 5];
let new_arr_for_slice = arr_for_slice.splice(3, 2);
document.write(`Масив: ${arr_for_slice.toString()} <br>`)
document.write(`Утворений масив: ${ new_arr_for_slice.toString()}`);
//=================================================================================

//Task 6===========================================================================
document.write("<h2>Завдання 6</h2>");
let arr_slice = [1, 2, 3, 4, 5];
document.write(`Масив: ${arr_slice.toString()} <br>`);
arr_slice.splice(1, 2);
document.write(`Новий масив: ${ arr_slice.toString() }`);
//=================================================================================

//Task 7===========================================================================
document.write("<h2>Завдання 7</h2>");
let arr_slice1 = [1, 2, 3, 4, 5];
document.write(`Масив: ${arr_slice1.toString()} <br>`);
let new_arr_slice1 = arr_slice1.splice(1, 3);
document.write(`Новий масив : ${new_arr_slice1.toString()}`);
//=================================================================================

//Task 8===========================================================================
document.write("<h2>Завдання 8</h2>");
let arr_slice2 = [1, 2, 3, 4, 5];
document.write(`Масив: ${arr_slice2.toString()} <br>`);
arr_slice2.splice(3, 0, "a", "b", "c");
document.write(`Новий масив : ${arr_slice2.toString()}`);
//=================================================================================

//Task 9===========================================================================
document.write("<h2>Завдання 9</h2>");
let arr_slice3 = [1, 2, 3, 4, 5];
document.write(`Масив: ${arr_slice3.toString()} <br>`);
arr_slice3.splice(1, 0, "a", "b");
arr_slice3.splice(6, 0, "c");
arr_slice3.splice(8, 0, "e");
document.write(`Новий масив : ${arr_slice3.toString()}`);
//=================================================================================

//Task 10==========================================================================
document.write("<h2>Завдання 10</h2>");
let sort_arr = [3, 4, 1, 2, 7];
document.write(`Масив: ${sort_arr.toString()} <br>`);
sort_arr.sort((a, b) => {
    if (a >= b) return 1;
    else if (a <= b) return -1;
    else return 0;
});
document.write(`Посортований асив: ${sort_arr.toString()} <br>`);
//=================================================================================

//Task 11==========================================================================
document.write("<h2>Завдання 11</h2>");
const obj1 = { js: "test", jq: "hello", css: "world" };
document.write("Масив ключів об'єкта: " + Object.keys(obj1).toString());
//=================================================================================

//Task 12==========================================================================
document.write("<h2>Завдання 12</h2>");
let str1 = "aaa@bbb@ccc";
document.write("Рядок 'aaa@bbb@ccc' після заміни: " + str1.replace(/@/g, "!"));
//=================================================================================

//Task 13==========================================================================
document.write("<h2>Завдання 13</h2>");
let date = "2025-12-31";
document.write("Перетворення дати '2025-12-31' = " + date.split("-").reverse().join("/"));
//=================================================================================

//Task 14==========================================================================
document.write("<h2>Завдання 14</h2>");
let str2 = "я вчу javascript!";
const arr_char = str2.split("");
document.write(` Дано рядок 'я вчу javascript!', записано в масив кожен символ  ${arr_char.toString()}`);
//=================================================================================

//Task 15==========================================================================
document.write("<h2>Завдання 15</h2>");
let arr_15 = [1, 2, 3, 4, 5, 6, 7, 8];
for (let i = 0; i < arr_15.length; i++) {
    let x = "";
    for (let j = 0; j < i + 1; j++) {
        x += "x";
    }
    arr_15[i] = x;
}
document.write("Заповнили масив індекс елемента= к-сть символів x:<br>Результат на основі масиву з 8-ми елементів " + arr_15.toString());
//=================================================================================

//Task 16==========================================================================
document.write("<h2>Завдання 16</h2>");

function arrayFill(value, lengthArray) {
    return new Array(lengthArray).fill(value);
}
document.write("Масив розміром 10 елементів заповнено текстом ab:   " + arrayFill("ab", 10).toString());
//=================================================================================

//Task 17==========================================================================
document.write("<h2>Завдання 17</h2>");
let arr_17 = [
    [
        [1, 2],
        [3, 4],
    ],
    [
        [5, 6],
        [7, 8],
        [5, 6],
        [7, 8],
        [5, 6],
        [7, 8],
    ],
];
let sum = 0;
arr_17.forEach((el1) => {
    el1.forEach((el2) => {
        el2.forEach((el3) => {
            sum += el3;
        });
    });
});
document.write("Сума елементів тривимірного масиву :" + sum);
//=================================================================================

//Task 18==========================================================================
document.write(`<h2>Завдання 18</h2><br>Масив з елементами "Jazz","Blues" `);
let styles = ["Jazz", "Blues"];
document.write("<br>Додано елемент Rock-n-Roll");
styles.push("Rock-n-Roll");
styles[Math.ceil(styles.length / 2)] = "Classics";
document.write("<br>Видалено перший елемент:" + styles.shift());
styles.unshift("Rap", "Reggae");
document.write("<br> Поточні елементи масиву " + styles.toString());
//=================================================================================

//Task 19==========================================================================
document.write("<h2>Завдання 19</h2>");
let str19 = "-webkit-transition";

function camelize(str) {
    str = str.split("-");

    for (let i = 1; i < str.length; i++) {
        str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
    }

    return str.join("");
}
document.write(`Фнкція, яка перетворює рядки типу “my-short-string” в  “myShortString”<br>Результат на основі прикладу -webkit-transition  ${camelize(str19)}`);
//=================================================================================

//Task 20==========================================================================
document.write("<h2>Завдання 20</h2>");
const filterRange = (arr, a, b) => {
    return arr.filter((el) => el >= a && el <= b);
};
document.write(
    "Пошук в масиві [8, 2, 3, 4, 5, 9, 8, 42, 21, 14] елементів >=4 і  <=9 :  "
);
document.write(filterRange([8, 2, 3, 4, 5, 9, 8, 42, 21, 14], 4, 9));
//=================================================================================

//Task 21==========================================================================
document.write("<h2>Завдання 21</h2>");
const copySorted = (arr) => {
    let copyArray = arr.slice();
    return copyArray.sort((a, b) => {
        if (a >= b) return 1;
        else if (a <= b) return -1;
        else return 0;
    });
};
let arr21 = ["HTML", "JavaScript", "CSS"];
document.write(`<br>Початковий масив ${arr21.toString()}`);
document.write(`<br>Відсортована копія масиву: ${copySorted(arr21)}`);
//=================================================================================

//Task 22==========================================================================
document.write("<h2>Завдання 22</h2>");
let Ivan = { name: "Іван", age: 25 };
let Petro = { name: "Петро", age: 30 };
let Mariya = { name: "Марія", age: 28 };

const sortByAge = (users) => {
    return users.sort((a, b) => {
        if (a.age > b.age) return 1;
        else if (a.age < b.age) return -1;
        else return 0;
    });
};
document.write(`Сортування масиву об'єктів за полем age:  ${JSON.stringify( sortByAge([Petro, Ivan, Mariya]) )}`);
//=================================================================================

//Task 23==========================================================================
document.write("<h2>Завдання 23</h2>");
const getAverageAge = (users) => {
    let ages = 0;
    users.forEach((user) => (ages += user.age));
    return Math.ceil(ages / users.length);
};
document.write(`Функція, яка повертає середній вік на основі масиву об'єктів : ${JSON.stringify( getAverageAge([Ivan, Petro, Mariya]))} `);
//=================================================================================

//Task 24==========================================================================
document.write("<h2>Завдання 24</h2>");
let users = [
    { id: "іван", name: "Іван Іванко", age: 20 },
    { id: "ганна", name: "Ганна Іванко", age: 20 },
    { id: "петро", name: "Петро Петренко", age: 20 },
];
const groupById = (arr) => {
    return arr.reduce((acc, el) => {
        acc[el.id] = el;
        return acc;
    }, {});
};
document.write(`Функція groupById(arr), яка створює з масиву об’єкт із ключом id та елементами масиву як значеннями ${JSON.stringify(groupById(users))}`);
//=================================================================================

//Task 25==========================================================================
document.write("<h2>Завдання 25</h2>");
const salaries = {
    Іван: 100,
    Петро: 300,
    Марія: 250,
};

const sumSalaries = (salaries) => {
    let arrSalaries = Object.values(salaries);
    if (arrSalaries.length == 0) {
        return 0;
    }
    let sum = 0;
    for (key of arrSalaries) {
        sum += key;
    }
    return sum;
};
document.write(`Функція sumSalaries(salaries), що повертає суму всіх зарплат =${sumSalaries(salaries)}`);
//=================================================================================