
const inputEl=document.querySelector('#validation-input')
const inputLength=document.querySelector('[data-length]')

console.log(inputEl)
console.log(inputLength.dataset)

inputEl.addEventListener('focus',onFocusInput)
inputEl.addEventListener('blur',auditInputValue)

function onFocusInput(){
    console.log('in focus')
}

function auditInputValue(event){

    const inputLengthNumber=Number(inputLength.dataset.length)
    console.log(event.currentTarget.value.length)
    console.log(inputLengthNumber)
       if(inputLengthNumber!==event.currentTarget.value.length){
           inputEl.classList.add('invalid')
    }
    else inputEl.classList.replace('invalid','valid')
}