let counterValue = 0


const valueEl =document.querySelector('#value')

const buttonDecEl=document.querySelector('[data-action="decrement"]')
const buttonIncEl=document.querySelector('[data-action="increment"]')

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


// let counterValue = 0;
// const buttonDec=document.querySelector('[data-action="decrement"]');
// const buttonInc=document.querySelector('[data-action="increment"]');
// const valueEl=document.querySelector('#value')

// buttonDec.addEventListener('click',onbuttonDecClick)
// buttonInc.addEventListener('click',onbuttonIncClick)
// function onbuttonDecClick(){
//     counterValue-=1
//     console.log(counterValue)
//     updateValueText()
// }

// function onbuttonIncClick(){
//     counterValue+=1
//     console.log(counterValue)
//     updateValueText()
// }
// function updateValueText(){
//     valueEl.textContent=counterValue
// }