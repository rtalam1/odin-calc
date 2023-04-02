const container = document.querySelector('#display')
const buttons = document.querySelectorAll('.button')
const clear = document.querySelector('.clear')


buttons.forEach(button => button.addEventListener('click', () =>{
    let value = button.textContent
    let textNode = document.createTextNode(value)
    let spaceNode = document.createTextNode(' ')

    container.appendChild(textNode)
    container.appendChild(spaceNode)


}))


function add(x,y){
    return x + y
}
function subtract(x,y){
    return x - y
}

function multiply(x,y){
    return x * y
}

function divide(x,y){
    return x / y
}

function operate(x, operator, y){
    if (operator === '+'){
        return add(x,y)
    }
    if (operator === '-'){
        return subtract(x,y)
    }
    if (operator === '*'){
        return multiply(x,y)
    }
    if (operator === '/'){
        return divide(x,y)
    }
}



let Num1 = 1
let Operator = '+'
let Num2 = 3

