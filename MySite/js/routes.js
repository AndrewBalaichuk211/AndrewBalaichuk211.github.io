/*
 * routes definition and handling for paramHashRouter
 */

import Mustache from "./mustache.js";
import processOpnFrmData from "./addOpinion.js";

//an array, defining the routes
export default [

    {
        //the part after '#' in the url (so-called fragment):
        hash: "TUKE",
        ///id of the target html element:
        target: "router-view",
        //the function that returns content to be rendered to the target html element:
        getTemplate: (targetElm) =>
            document.getElementById(targetElm).innerHTML = document.getElementById("template-TUKE").innerHTML
    },
    {
        hash: "main",
        target: "router-view",
        getTemplate: createHtml4MainArticles
    },
    {
        hash: "articles",
        target: "router-view",
        getTemplate: fetchAndDisplayArticles
    },

    {
        hash: "opinions",
        target: "router-view",
        getTemplate: createHtml4opinions
    },

    {
        hash: "addOpinion",
        target: "router-view",
        getTemplate: (targetElm) => {
            document.getElementById(targetElm).innerHTML = document.getElementById("template-addOpinion").innerHTML;
            document.getElementById("opnFrm").onsubmit = processOpnFrmData;
        }
    }

];

function createHtml4opinions(targetElm) {
    const opinionsFromStorage = localStorage.myTreesComments;
    let opinions = [];

    if (opinionsFromStorage) {
        opinions = JSON.parse(opinionsFromStorage);
        opinions.forEach(opinion => {
            opinion.created = (new Date(opinion.created)).toDateString();
            opinion.willReturn =
                opinion.willReturn ? "I will return to this page." : "Sorry, one visit was enough.";
        });
    }

    document.getElementById(targetElm).innerHTML = Mustache.render(
        document.getElementById("template-opinions").innerHTML,
        opinions
    );
}

// функція яка відображає останні статті
function fetchAndDisplayArticles(targetElm) {
    const url = "https://wt.kpi.fei.tuke.sk/api/article";

    function reqListener() {
        // stiahnuty text
        console.log(this.responseText)
        if (this.status == 200) {
            document.getElementById(targetElm).innerHTML =
                Mustache.render(
                    document.getElementById("template-articles").innerHTML,
                    JSON.parse(this.responseText)
                );
        } else {
            alert("Došlo k chybe: " + this.statusText);
        }

    }
    console.log(url)
    var ajax = new XMLHttpRequest();
    ajax.addEventListener("load", reqListener);
    ajax.open("GET", url, true);
    ajax.send();
    console.log("send");
}


const userCountOfPages = 45;
function createHtml4MainArticles(targetElm, curr) {
    // посилання на базу данних статтей
    const url = "https://wt.kpi.fei.tuke.sk/api/article";
    // посилання для получення даних meta
    const urlForMeta = "/?max=1&offset=1";
    // заносимо в змінну значення теперішньої сторінки
    const current = parseInt(curr);
    // змінна для зберігання даних meta
    var dataFromMeta = null;

    //функція яка зчитує дані meta та заномить їх у функцію
    function reqListener() {
        console.log(this.responseText)
        if (this.status == 200) {
            var resp = JSON.parse(this.responseText)
            dataFromMeta = resp.meta
            document.getElementById(targetElm).innerHTML = JSON.stringify(this.responseText)
        } else {
            alert("Error: " + this.statusText);
        }

    }

    // функція яка виводть артиклі на сторінку html
    function loadArticles() {
        console.log(this.responseText)
        if (this.status == 200) {
            document.getElementById("articles-list").innerHTML =
                Mustache.render(
                    document.getElementById("template-articles").innerHTML,
                    JSON.parse(this.responseText)
                );
        } else {
            alert("Error: " + this.statusText);
        }
    }

    console.log(url + urlForMeta)
    // отримання meta
    var ajax = new XMLHttpRequest();
    ajax.addEventListener("load", reqListener);
    ajax.open("GET", (url + urlForMeta), false);
    ajax.send();

    // якщо дані мета null виводимо повідомлення про помилку
    if (dataFromMeta !== null) {
        // змінна зберігає дані теперішньої сторінки і загальну кількість
        const data4rendering = {
            currPage: current,
            pageCount: userCountOfPages,
        };


        if (current > 1) {
            data4rendering.prevPage = parseInt(current) - 1;
        }
        if (current < userCountOfPages && current < Math.round(dataFromMeta.totalCount / 20)) {
            data4rendering.nextPage = parseInt(current) + 1;
        }

        // виводимо дані про сторінки в html
        document.getElementById(targetElm).innerHTML = Mustache.render(
            document.getElementById("template-main").innerHTML,
            data4rendering
        );

        // коли переходимо на нову сторінку вже будем використовувати нове посилання
        // тобто буде нове звернання до серверу json
        var newUrl = "/?max=20&offset=" + (parseInt(current) - 1) * 20
        var pageUrl = url + newUrl;
        var api = new XMLHttpRequest();
        api.addEventListener("load", loadArticles);
        api.open("GET", pageUrl, false);
        api.send();


    } else {
        alert("Error. Failed to connnect");
    }
}