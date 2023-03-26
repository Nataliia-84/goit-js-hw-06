
const containar= document.querySelector('#controls')
console.log(containar.children)


const buttonCreate=document.querySelector('button[data-create]')
console.log(buttonCreate)

const buttonDestroy=document.querySelector('button[data-destroy]')
console.log(buttonDestroy)

const boxCreate = document.querySelector('#boxes')
console.log(boxCreate)

buttonCreate.addEventListener('click',onClikButtonCreate)

buttonDestroy.addEventListener('click',onClickButtonDestroy)

function onClikButtonCreate(event) {
  console.log(event.currentTarget)
 createBoxes(Number(containar.children[0].value))

}

function createBoxes(amount){
   let width = 20
    let height = 20
    const step = 10
  for (let i = 1; i <= amount; i += 1){
    const color=getRandomHexColor()
    const box = document.createElement('div')
    width+=step
    height += step
    box.style.width = width+'px';
    box.style.height = height+'px';
    box.style.backgroundColor = color;
    console.log(box)
    boxCreate.append(box)
  }
}

function onClickButtonDestroy(event) {
  
  console.log(event.currentTarget)
  containar.children[0].value = 0;
  boxCreate.innerHTML=' '
 
}


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
