function insert(num) {
    var a = document.querySelector('.textview');
    a.value += num;
}

function opt(amd) {
    var view = document.querySelector('.textview');
    if (view.value != "") {
        view.value += amd;
    }
}

function zero() {
    var view = document.querySelector('.textview');
    if (view.value != "") {
        view.value += '0';
    }
}

function equal() {
    var button = document.getElementsByClassName('none');
    var a = document.querySelector('.textview');
    var exp = a.value;

    if (exp) {
        try { a.value = eval(exp); } catch (e) {
            alert("Syntax Error!");
            document.querySelector('.textview').value = 'Syntax Error!';
            none();
        }
    }
    if (a.value == 0) {
        a.value = "";
    }
    if (a.value == 'Infinity') {
        document.querySelector('.textview').value = "Can't divide by Zero!";
        // button.onclick ='none()';
        alert('Can\'t divide by Zero!')
        none();
    }
}

function none() {
    alert('Press the Clear button!');
}

function clean() {
    document.querySelector('.textview').value = '';
}