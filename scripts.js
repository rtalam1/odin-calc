const container = document.querySelector('#display')
const digitButtons = document.querySelectorAll('.button-d')
const clear = document.querySelector('.clear')
const operators = document.querySelectorAll('.button-o')
const enter = document.querySelector('.enter')
clear.addEventListener('click', () =>{
    container.innerHTML = ''
    num1 = ''
    num2 = ''
    operator = ''
    counter = 0
})
enter.addEventListener('click', () =>{
    let value1 = parseInt(num1)
    let value2 = parseInt(num2)
    let result = operate(value1,operator,value2)
    let resultNode = document.createTextNode(result)
    container.innerHTML = result
})

let num1 = ''
let num2 = ''
let operator = ''
let counter = 0
digitButtons.forEach(button => button.addEventListener('click', () =>{
    let value = button.textContent
    let textNode = document.createTextNode(value)
    let spaceNode = document.createTextNode(' ')

    let test = parseInt(value)

    // This first conditional block will capture the first element and operator
    if (!isNaN(test) && counter < 1){
        num1 = num1 + value
        container.appendChild(textNode)
    }
    else{
        num2 = num2 + value
        container.appendChild(textNode)
    }
}))

operators.forEach(button => button.addEventListener('click' ,() =>{
    let value = button.textContent
    let textNode = document.createTextNode(value)
    let spaceNode = document.createTextNode(' ')

    container.appendChild(textNode)
    operator = value
    container.appendChild(spaceNode)
    counter++

}))


function addNum(x,y){
    console.log(x,y)
    let z = x.concat(y)
    return z
}

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





