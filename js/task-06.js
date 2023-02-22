const inputRef = document.querySelector("#validation-input");

inputRef.addEventListener("blur", onInputBlur);

function onInputBlur(event) {
  if (event.currentTarget.value.length === Number(inputRef.dataset.length)) {
    validRef();
  } else {
    invalidRef();
  }
}

function validRef() {
  inputRef.classList.add("valid");
  inputRef.classList.remove("invalid");
}

function invalidRef() {
  inputRef.classList.add("invalid");
  inputRef.classList.remove("valid");
}
