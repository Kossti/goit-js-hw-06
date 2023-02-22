const refs = {
  rangeRef: document.querySelector("#font-size-control"),
  spanRef: document.querySelector("#text"),
};

refs.rangeRef.addEventListener("input", function (event) {
  refs.spanRef.style.fontSize = this.value + "px";
});
