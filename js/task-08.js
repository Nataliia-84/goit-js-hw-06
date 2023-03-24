
const formEL = document.querySelector('.login-form')
console.log(formEL)

formEL.addEventListener('submit',onFormELSubmit)

function onFormELSubmit(event) {
    event.preventDefault();
    const emailValue = event.currentTarget.elements.email.value;
    const passwordValue = event.currentTarget.elements.password.value
    if (emailValue.trim() === '' || passwordValue.trim() === '') {
        alert('Всі поля потрібно заповнити')
    } else {
        const formElObj = {
            emailValue,
            passwordValue
        
        }
        console.log(formElObj)
        formEL.reset()
    }
} 
