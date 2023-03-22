const categoriesEl=document.querySelector('#categories')

const itemEl=categoriesEl.querySelectorAll('.item')

console.log(itemEl)

const numberOfCategories=itemEl.length

console.log(`Number of categories: ${numberOfCategories}`)


itemEl.forEach((item)=>{
console.log('Category:',item.children[0].textContent);
console.log(`Elements: ${item.children[1].children.length}`)})



// const ulEl=document.querySelector('#categories')
// console.log(ulEl)
// const itemEl=document.querySelectorAll('.item')
// console.log(`Number of categories: ${itemEl.length}`)


// itemEl.forEach((item)=>{
//     console.log(`Category: ${item.children[0].textContent}`)
//     console.log(`Elements: ${item.children[1].children.length}`)
// })