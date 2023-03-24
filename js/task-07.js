const inputEL= document.querySelector('#font-size-control')
console.log(inputEL)

const spamEl = document.querySelector('#text')
console.log(spamEl)

inputEL.addEventListener('input',onInputElchange)

function onInputElchange(event) {
    
  spamEl.style.fontSize= event.currentTarget.value+'px'
       
}