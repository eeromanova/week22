const form = document.forms.form;
const inputs = document.querySelectorAll(".form__input");
const button = document.querySelector(".form__submit");
let errorMessages = [];
function checkValidity(input) {
  errorMessages = [];
  let validity = input.validity;
  if (validity.typeMismatch) {
    input.classList.add("error__input");
    errorMessages.push("Неверный формат заполнения");
  } else{input.classList.remove("error__input");}
  if (validity.patternMismatch) {
    input.classList.add("error__input");
    errorMessages.push(
      "Пароль должен содержать как минимум одну заглавную букву, одну строчную букву и одну цифру"
    );
  } else{input.classList.remove("error__input");}
  if (validity.tooLong) {
    input.classList.add("error__input");
    errorMessages.push("Количество символов не может быть больше 20");
  } else{input.classList.remove("error__input");}
  if (validity.tooShort) {
    input.classList.add("error__input");
    errorMessages.push(
      `Количество символов должно быть не меньше ${input.getAttribute(
        "minlength"
      )}`
    );} else{input.classList.remove("error__input");}
  if (validity.valueMissing) {
    input.classList.add("error__input");
    errorMessages.push("Поле не заполнено");
  }
  else{input.classList.remove("error__input");
} 
}
const nameFirst = form.elements.name;
const errName = document.getElementById("name-error");
const email = form.elements.email;
const errEmail = document.getElementById("email-error");
const age = form.elements.age;
const errAge = document.getElementById("age-error");
const password1 = form.elements.password1;
const errPassword1 = document.getElementById("password1-error");
const password2 = form.elements.password2;
const errPassword2 = document.getElementById("password2-error");
const profession = form.elements.profession;
const errProfession = document.getElementById("profession-error");
const errMessage = () => {
  checkValidity(nameFirst);
  errName.textContent = errorMessages.join(", ");
  checkValidity(email);
  errEmail.textContent = errorMessages.join(", ");
  checkValidity(age);
  errAge.textContent = errorMessages.join(", ");
  checkValidity(password1);
  errPassword1.textContent = errorMessages.join(", ");
  checkValidity(password2);
  errPassword2.textContent = errorMessages.join(", ");
  checkValidity(profession);
  errProfession.textContent = errorMessages.join(", ");
};
function checkAllInputs() {
  for (let input of inputs) {
    checkValidity(input);
  }
}
const checkBox = document.getElementById("checkbox");
  const errCheckbox = document.getElementById("checkbox-error");
const checkCheckbox = () => {
  if (!checkBox.checked) {
    errCheckbox.textContent = "Поле обязательно для заполнения";
  }
};
button.onclick = (event) => {
  event.preventDefault();
  checkAllInputs();
  errMessage();
  checkCheckbox();
};
const cleanForm = () => {
  form.reset();
  for (let input of inputs) {
  input.classList.remove("error__input");
  }
  errName.textContent = "";
  errEmail.textContent = "";
  errAge.textContent = "";
  errProfession.textContent = "";
  errPassword1.textContent = "";
  errPassword2.textContent = "";
  errCheckbox.textContent = "";
};

nameFirst.addEventListener("input", function (evt) {
  checkValidity(nameFirst);
  errName.textContent = errorMessages.join(", ");
});
email.addEventListener("input", function (evt) {
  checkValidity(email);
  errEmail.textContent = errorMessages.join(", ");
});
age.addEventListener("input", function (evt) {
  checkValidity(age);
  errAge.textContent = errorMessages.join(", ");
});
password1.addEventListener("input", function (evt) {
  checkValidity(password1);
  errPassword1.textContent = errorMessages.join(", ");
});
password2.addEventListener("input", function (evt) {
  checkValidity(password2);
  errPassword2.textContent = errorMessages.join(", ");
});