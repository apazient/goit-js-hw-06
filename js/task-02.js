const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const ul = document.querySelector(`ul`);

const elements = ingredients.map(el => {

  const ingredientsEl= document.createElement(`li`);
  ingredientsEl.textContent = el;
  ingredientsEl.classList.add(`item`);

  return ingredientsEl;
});
ul.append(...elements);
console.log(ul)