const categoriesEl=document.querySelector('#categories')

const itemEl=categoriesEl.querySelectorAll('.item')

console.log(itemEl)

const numberOfCategories=itemEl.length

console.log(`Number of categories: ${numberOfCategories}`)


itemEl.forEach((item)=>{
console.log('Category:',item.children[0].textContent);
console.log(item.children[1].children.length)})