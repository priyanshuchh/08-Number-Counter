let number = document.querySelector('.number');
let save = document.querySelector('.save');
let savedNumber = document.querySelector('.value');
let numberSave = " "

function increaseNumber() {
    let value = parseInt(number.innerHTML);
    let newValue = 0;
    newValue = value + 1;
    number.innerHTML = newValue;
}
function decreaseNumber() {
    let value = parseInt(number.innerHTML);
    let newValue = 0;
    newValue = value - 1;
    number.innerHTML = newValue;
}

function saveNumber() {
    let value = number.innerHTML;
    console.log(value);
    if (savedNumber.innerHTML == " ") {
        numberSave = value + " ";
    } else {
        numberSave = numberSave + " " + value + " ";
    }

    savedNumber.innerHTML = numberSave;
}
