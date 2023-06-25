let num1 = ''
let num2 = ''
let oper = ''
let ans = 0
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

        num1 += button.value
        displayValue += `${button.value}`
        display.textContent = displayValue
    })
})


calcButton.forEach((button) =>{
    button.addEventListener('click', () =>{
        if(oper != ''){
            ans = operate(num1,num2,oper)
            num1 = ans
            oper = '' 
        }
        num2 = num1
        num1 = ''
        oper = button.value
        displayValue += oper
        display.textContent = displayValue
        
    })
})

document.getElementById('clear').addEventListener('click', () => {
    num1 = ''
    num2 = ''
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
        num1 = ans
        oper = ''
    }
})

function operate(x, y, operator){
    x = Number(x)
    y = Number(y)
    if(operator == '+'){
        return add(x, y)
    }
    else if(operator == '-'){
        return substract(y, x)
    }
    else if(operator == '*'){
        return product(x, y)
    }
    else if(operator == '/'){
        return divide(y, x)
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