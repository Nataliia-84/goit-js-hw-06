let counterValue = 0

const containerEl=document.querySelector('#counter')
console.log(containerEl)
const valueEl =document.querySelector('#value')
console.log(valueEl)
const buttonDecEl=document.querySelector('[data-action="decrement"]')
const buttonIncEl=document.querySelector('[data-action="increment"]')
console.log(buttonDecEl.dataset)
console.log(buttonIncEl.dataset)
buttonDecEl.addEventListener('click', onButtonDecElClick)
buttonIncEl.addEventListener('click', onButtonIncElClick)

function onButtonDecElClick () {
    counterValue-=1
    console.log(counterValue)
    updateValueEl()
}


function onButtonIncElClick () {
    counterValue+=1
    console.log(counterValue)
    updateValueEl()
}

function updateValueEl(){
    valueEl.textContent=counterValue
    
}
