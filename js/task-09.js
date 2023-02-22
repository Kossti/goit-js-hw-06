function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const bodyRef = document.querySelector("body");
const buttonRef = document.querySelector(".change-color");
const colorValue = document.querySelector(".color");

buttonRef.addEventListener("click", onButton);
console.log(bodyRef);

function onButton(event) {
  bodyRef.style.backgroundColor = getRandomHexColor();
  colorValue.value = getRandomHexColor();
  console.log(colorValue.value);
}
