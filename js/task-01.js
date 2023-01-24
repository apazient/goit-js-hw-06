
/**task 1**/
const categories = document.querySelectorAll(".item")
const categoriesCount = document.querySelectorAll(".item").length;
const catName=[];

console.log(`Number of categories: ${categoriesCount}\n\n`);

categories.forEach((el, i) => {
    catName.push(el.firstElementChild.textContent, el.querySelectorAll(`li`).length)
    console.log(`Category: ${el.firstElementChild.textContent}\nElements: ${el.querySelectorAll(`li`).length}\n\n`)
      
});



