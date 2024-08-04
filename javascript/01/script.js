const background = document.querySelector(".background");
const colors = ["red", "orange", "yellow", "lightgreen", "green", "skyblue", "blue", "navy", "purple"];
let currentColorIndex = 0;

background.style.backgroundColor = colors[currentColorIndex];
background.style.transition = "background-color 1.5s ease";

setInterval(() => {
  currentColorIndex = (currentColorIndex + 1) % colors.length;
  background.style.backgroundColor = colors[currentColorIndex];
}, 1500);
