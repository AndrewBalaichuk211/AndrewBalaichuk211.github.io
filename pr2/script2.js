//Task 2===========================================================================
function getTime2() {
    let time = new Date();
    const hours = time.getHours() < 10 ? "0" + time.getHours() : time.getHours();
    const minuts = time.getMinutes() < 10 ? "0" + time.getMinutes() : time.getMinutes();
    const seconds = time.getSeconds() < 10 ? "0" + time.getSeconds() : time.getSeconds();
    textTime2.value = `${hours}:${minuts}:${seconds}`;
    setTimeout("getTime2()", 1000);
}
getTime2();
setInterval(() => alert("Пройшла одна хвилина"), 60000);
//=================================================================================