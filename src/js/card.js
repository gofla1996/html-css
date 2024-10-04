let button = document.querySelector(".flip-button");
let card = document.querySelector(".card");

button.addEventListener("click", function () {
  card.classList.toggle("is-flipped");
});
