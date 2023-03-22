const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listEl=document.querySelector('#ingredients')
console.log(listEl)

// ingredients.forEach((item)=>{
// const li = document.createElement("li")
// li.classList=('item')
// li.textContent=item

// console.log(li)
// listEl.append(li)
// })
const liEl=ingredients.map((item)=>{
  const li = document.createElement("li")
  li.classList=('item')
  li.textContent=item
  
 return li
  
  })
  listEl.append(...liEl)
  console.log(liEl)
  console.log(listEl)

 