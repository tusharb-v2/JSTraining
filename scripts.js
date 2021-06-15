const displayNumber = document.getElementById('numValueBox');

var dataContent = {
    number: 0,
    set setNumber(a) {
        this.number = a;
    },
    get getNumber() {
        return this.number;
    }
}

display();

// Increment Section
function increment () {
    dataContent.setNumber = ++dataContent.number;
    display();
}

// Decrement Section
function decrement () {
    dataContent.setNumber = --dataContent.number;
    display();
}

// Addition Section
function addition () {
    dataContent.setNumber = dataContent.number + dataContent.number;;
    display();
}

// Multiplication Section
function multiplication () {
    dataContent.setNumber = dataContent.number * dataContent.number;;
    display();
}

function display () {
    displayNumber.value = dataContent.getNumber;
}