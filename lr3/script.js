//Task 1===========================================================================
document.writeln("<h2>Завдання 1</h2>");
document.writeln(new Date(2021, 2, 20, 3, 12));
//=================================================================================

//Task 2===========================================================================
document.writeln("<h2> Завданння 2 </h2>")

function getDayofTheWeek(date) {
    let days = ['НД', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ']
    return days[date.getDay()]
}
let date = new Date(2012, 0, 3)
document.writeln("День тижня: " + getDayofTheWeek(date))
    //=================================================================================

//Task 3===========================================================================
document.writeln("<h2> Завданння 3 </h2>")

function getLastDayOfMonth(year, month) {
    return (new Date(year, month + 1, 0).getDate())
}
document.writeln("Номер останього дня місяця: " + getLastDayOfMonth(2020, 1))
    //=================================================================================

//Task 4===========================================================================
document.writeln("<h2> Завданння 4 </h2>")
const getSecondsToTomorrow = () => {
    let tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    tomorrow.setHours(0, 0, 0);
    document.write("До завтра залишилось " + (tomorrow - Date.now()) / 1000 + " секунд");
};
getSecondsToTomorrow();
//=================================================================================

//Task 5===========================================================================
document.writeln("<h2> Завданння 5 </h2>")

function formatDateToString(date) {
    const dataParts = date.split(" ");
    let res = dataParts[0].slice(-3).replace(",", "");
    return `${dataParts[0].slice(0, 5)}.${res} ${dataParts[1].slice(0, 5)}`;
}

const formatDate = (date) => {
    const diff = new Date() - date;
    if (diff < 1000) {
        return "Тепер";
    } else if (diff < 60000) {
        return Math.floor(diff / 1000) + " секунд назад";
    } else if (diff < 3600000) {
        return Math.floor(diff / 60000) + " хвилин назад";
    } else {
        return formatDateToString(date.toLocaleString());
    }
};
document.write("Форматування дати:  " + formatDate(new Date(2021, 12, 31, 10, 00)));
//=================================================================================