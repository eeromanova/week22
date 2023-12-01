const form=document.forms.form;
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
    errorMessages.push("Поле не заполнено");
  }
  if (validity.typeMismatch){
    input.classList.add('error__input');
    errorMessages.push("Неверный формат заполнения");
  }
  if (validity.patternMismatch){
    input.classList.add('error__input');
    errorMessages.push("Неверный формат заполнения");
  }
  if (validity.tooLong){
    input.classList.add('error__input');
    errorMessages.push("Количество символов не может быть больше 20");
  }
  if (validity.tooShort){
    input.classList.add('error__input');
    errorMessages.push("Количество символов не может быть меньше 2");
  }
}
checkValidity(inputs[0]);
console.log(errorMessages);
// const errMessage=()=>{
//   for (let i=0; i<inputs.length; i++){
//   if (!checkValidity(inputs[i])){
//     errors[i].textContent = errorMessages.join(', ');
//   }}
// };
function checkAll() {
  for (let i=0; i<inputs.length; i++) {
      checkValidity(inputs[i]);
      errors[i].textContent = errorMessages.join(', ');
      // errMessage(i);
  }
  
}
button.onclick = (event)=>{
  event.preventDefault();
  checkAll();

};
const cleanForm=()=>{
  form.reset();
  inputs.forEach((input)=>{
    input.classList.remove('error__input');
  })
}

