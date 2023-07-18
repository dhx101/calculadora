let add = (actual, value) => actual += value;

let subtract = (actual, value) => actual -= value;

let multiply = (actual, value) => actual * value;

let divide =  (actual, value) => actual / value

function changeDisplay(value) {
    let results = document.querySelector('#resultados');
    let display = document.querySelector('.display');
    let newDisplay = document.createElement('p')
    newDisplay.classList.add('display')
    let actual = display.textContent
    if( actual == 0) {
        newDisplay.textContent = value
        results.removeChild(results.lastChild)
        results.appendChild(newDisplay)
} else {
        newDisplay.textContent = actual + value
        results.removeChild(results.lastChild)
        results.appendChild(newDisplay)
}}
    
function getBtn() {
    let btn = document.querySelectorAll(button)
    
}


changeDisplay(3)
console.log(add(1,2))
console.log(subtract(5,3))
console.log(multiply(5,3))
console.log(divide(4,2))
