const colorButton = document.getElementById("colorButton");
const colorBody = document.getElementById("colorBody");

function getRandomColor() {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);
  return `rgb(${red}, ${green}, ${blue})`;
}

colorButton.addEventListener("click", () => {
  const color = getRandomColor();
  colorBody.style.backgroundColor = color;
});