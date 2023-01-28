let counterValue = 0;

const decBtn = document.querySelector(`button[data-action="decrement"]`);
const incBtn=document.querySelector(`button[data-action="increment"]`);
const output = document.querySelector(`#value`);

decBtn.addEventListener(`click`, onDecBtnClick)
incBtn.addEventListener(`click`, onIncBtnClick)

function onDecBtnClick() {
    counterValue -= 1;
    output.textContent = counterValue;
}
function onIncBtnClick() {
    counterValue += 1;
    output.textContent = counterValue;
}
