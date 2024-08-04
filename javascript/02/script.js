const countDisplay = document.querySelector(".count");
const button = document.querySelector(".btn");
let count = 0;

button.addEventListener("click", () => {
  count++;
  if (count > 10) {
    count = 0;
  }

  countDisplay.textContent = count;
});
