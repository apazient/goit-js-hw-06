const input = document.querySelector(`input`)
let inputData = "";
input.addEventListener(`blur`, onInputValid);
function onInputValid(event) {
    inputData=event.currentTarget.value
  
    if (inputData.length === Number(input.getAttribute(`data-length`))) {
        input.classList.add(`valid`)
        input.classList.remove(`invalid`)
     
        console.log("valid")
    } else {
          input.classList.add(`invalid`)
        input.classList.remove(`valid`)
       
        
       
    }
  
      
}
