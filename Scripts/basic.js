function add (a,b){
    return a + b;
}

function subtract (a,b){
    return a - b;
}

function multiply (a,b){
    return a*+ b;
}

function divide (a,b){
    return a / b;
}

console.log(add(2,3));

module.exports = {
    add,
    subtract,
    multiply,
    divide,
}