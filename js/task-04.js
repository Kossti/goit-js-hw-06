let counterValue = 0;

const btnDecrementRef = document.querySelector('[data-action="decrement"]');
const btnIncrementRef = document.querySelector('[data-action="increment"]');

const counter = document.querySelector("#value");

btnDecrementRef.addEventListener("click", onDecrementClick);
btnIncrementRef.addEventListener("click", onIncrementClick);

function onDecrementClick() {
  counterValue -= 1;
  counter.textContent = counterValue;
}

function onIncrementClick() {
  counterValue += 1;
  counter.textContent = counterValue;
}
