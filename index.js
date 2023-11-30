const inputs=document.querySelectorAll('.form__input');
console.log(inputs);
const button=document.querySelector('.form__submit');
const errors=document.querySelectorAll('.error-message');
console.log(errors);
let errorMessages=[];
function checkValidity(input) {
  let validity = input.validity;
  if (validity.valueMissing){
    input.classList.add('error__input');
    errorMessages.push="Поле не заполнено";
    // error.validationMessage;
  }
  if (validity.typeMismatch){
    input.classList.add('error__input');
    errorMessages.push="Неверный формат заполнения";
    // error.validationMessage;
  }
  if (validity.patternMismatch){
    input.classList.add('error__input');
    errorMessages.push="Неверный формат заполнения";
    // error.validationMessage;
  }
  if (validity.tooLong){
    input.classList.add('error__input');
    errorMessages.push="Количество символов не может быть больше 20";
    // error.validationMessage;
  }
  if (validity.tooShort){
    input.classList.add('error__input');
    errorMessages.push="Количество символов не может быть меньше 2";
    // error.validationMessage;
  }
}
const errMessage=(i)=>{
  if (checkValidity(inputs[i])==='false'){
    errors[i].textContent = errorMessages.join(', ');
  }
};
function checkAll() {
  for (let i=0; i<inputs.length; i++) {
      checkValidity(inputs[i]);
      errMessage(i);
  }
  
}
button.onclick = (event)=>{
  event.preventDefault();
  checkAll();

};

