const numberOfCategories = document.querySelectorAll(".item");
console.log("Number of categories", numberOfCategories.length);

numberOfCategories.forEach(function (categories) {
  const categoriesHeader = categories.querySelector("h2");
  const numberOfElements = categories.querySelectorAll("li");

  console.log("Category:", categoriesHeader.textContent);
  console.log("Element:", numberOfElements.length);
});
