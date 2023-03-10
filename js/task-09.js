function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const refs = {
  page: document.querySelector(`body`),
  button: document.querySelector(`.change-color`),
  color: document.querySelector(`.color`),
}
refs.button.addEventListener(`click`, handleGroundChange);

function handleGroundChange() {
  refs.page.style.backgroundColor = getRandomHexColor();
  refs.color.textContent = getRandomHexColor();
  
}

