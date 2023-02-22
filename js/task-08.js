const form = document.querySelector(".login-form");
const inputsRef = document.querySelectorAll("input");

form.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();

  const formElements = event.currentTarget.elements;
  const mail = formElements.email.value;
  const password = formElements.password.value;

  const formData = {
    mail,
    password,
  };
  console.log(formData);

  inputsRef.forEach((input) => {
    if (input.value.trim() === "") {
      alert("Всі поля повинні бути заповнені!");
    }
  });

  document.querySelector(".login-form").reset();
}
