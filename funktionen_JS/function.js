function add(a, b){
    return a + b;
}

function subtract(a, b){
    return a - b;
}

function multiply(a, b){
    return a * b;
}

function divide(a, b){
    return a / b;
}

let summe = add(5, 3);
let ergebnis = subtract(10, 3);
let finish = multiply(10, 5);
let ende = divide(10, 2);

console.log(summe);
console.log(ergebnis);
console.log(finish);
console.log(ende);


let begruessen = function(name) {
    return "Hallo. " + name + "!";
}
console.log(begruessen("Dennis"));


function customerName(firstName) {
    return "Hallo. " + firstName + "!";
}
console.log(customerName("Dennis"));

let double = a => a * 2;


function add(a,b) {  //normale funktion
    return a + b;
}

let addiere = function(a, b) {   //anonyme funktion
    return a + b;
}

let add = (a, b) => a + b; // arrow function
