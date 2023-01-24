const refs = {
    form: document.querySelector(`.login-form`),
    

};


 refs.form.addEventListener(`submit`, onFormSubmit);

function onFormSubmit(event) {
    event.preventDefault();
    const {
        elements: { email, password },
    } = event.currentTarget;
    if (email.value === `` || password.value === ``){
        return alert("All fields shuld be filed");
    }
    console.log(`Email: ${email.value},\nPassword: ${password.value}`);
    event.currentTarget.reset();

  

   

 }
