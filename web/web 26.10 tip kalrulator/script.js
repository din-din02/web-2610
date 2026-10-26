let input1= document.getElementById('input1')
let input2= document.getElementById('input2')

let result= document.getElementById('result')

let operatorButtons= Array.from(document.getElementsByClassName('operator-button'))
console.log(operatorButtons)

function calculator(num1, num2, operator){
    if (operator === '+'){
        return num1 + num2
    } else if(operator === '-'){
        return num1 - num2
    }else if(operator === '*'){
        return num1 * num2
    }else if(operator === '/'){
        return num1 / num2
    } else{
        return 'Error'
    }
}

operatorButtons.forEach(button=> {
    button.addEventListener('click', ()=>{
        result.textContent = calculator(Number(input1.value), Number(input2.value), button.innerText)
        // console.log(calculator(Number(input1.value), Number(input2.value), button.innerText))
        // console.log(button.innerText, input1, input2)
    } )
})
