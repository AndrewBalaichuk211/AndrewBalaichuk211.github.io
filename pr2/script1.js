//Task 1===========================================================================
function getTime1() {
    let time = new Date();
    const hours = time.getHours() < 10 ? "0" + time.getHours() : time.getHours();
    const minuts = time.getMinutes() < 10 ? "0" + time.getMinutes() : time.getMinutes();
    const seconds = time.getSeconds() < 10 ? "0" + time.getSeconds() : time.getSeconds();
    textTime1.value = `${hours}:${minuts}:${seconds}`;
    setTimeout("getTime1()", 1000);
}
getTime1();
//=================================================================================