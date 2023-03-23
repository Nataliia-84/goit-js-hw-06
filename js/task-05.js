
const inputEl=document.querySelector('#name-input')
const nameEL=document.querySelector('#name-output')
console.log(inputEl)
console.log(nameEL)

inputEl.addEventListener('input',onInputElInput)


function onInputElInput(event){
   
    
    if(event.currentTarget.value.trim() === ''){
        
        nameEL.textContent='Anonymous'
    }else{
        nameEL.textContent=inputEl.value
    }
    

console.log(event.currentTarget.value)

}
