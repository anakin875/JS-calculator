let num1 = 0
let num2 = 0
let oper = ''
let ans
let displayValue = ''
const digitButton = document.querySelectorAll(".digit")
const calcButton = document.querySelectorAll('.calc')
const display = document.getElementById('display-output')
const equal = document.getElementById('equal')

digitButton.forEach((button) =>{
    button.addEventListener('click', () =>{
        if(ans != '' & oper == ''){
            displayValue = ''
        }
        num1 = num2
        num2 = Number(button.value)
        console.log(num1, num2)
        displayValue += `${num2}`
        display.textContent = displayValue
    })
})


calcButton.forEach((button) =>{
    button.addEventListener('click', () =>{
        if(oper != ''){
            ans = operate(num1,num2,oper)
            display.textContent = ans
            displayValue = ans
            num2 = ans
            oper = '' 
        }
        oper = button.value
        displayValue += oper
        display.textContent = displayValue
        
    })
})

document.getElementById('clear').addEventListener('click', () => {
    num1 = 0
    num2 = 0
    oper = ''
    displayValue = ''
    ans = 0
    display.textContent = 0
})

equal.addEventListener('click', () =>{
    if(oper != ''){
        ans = operate(num1,num2,oper)
        display.textContent = ans
        displayValue = ans
        num2 = ans
        oper = ''
        console.log(displayValue)
        console.log(num1, num2)
    }
})

function operate(x, y, operator){
    if(operator == '+'){
        return add(x, y)
    }
    else if(operator == '-'){
        return substract(x, y)
    }
    else if(operator == '*'){
        return product(x, y)
    }
}


function add(x, y){
    return x + y
}

function substract(x, y){
    return x - y
}

function product(x, y){
    return x * y
}

function divide(x, y){
    return x / y
}