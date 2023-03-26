
const buttonChange=document.querySelector('.change-color')
console.log(buttonChange)
const colorChange = document.querySelector('.color')
console.log(colorChange)
const bodyEl = document.querySelector('body')
console.log(bodyEl)
buttonChange.addEventListener('click',onClickButtonChange)

// function onClickButtonChange(event) {
//   console.log(event.currentTarget)
//   colorChange.textContent = getRandomHexColor()
//   console.log(colorChange.textContent)
//   bodyEl.style.backgroundColor = colorChange.textContent;
  
// }

function onClickButtonChange(event) {
  colorChange.textContent = getRandomHexColor()
 
bodyEl.style.cssText = `background-color:${getRandomHexColor()}`
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
