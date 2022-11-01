const mais = document.querySelector(".more");
const menos = document.querySelector(".less");
const html = document.querySelector("html");
let size = 1.0;

mais.addEventListener("click", () => {
  size = size + 0.1;
  if (size > 1) {
    size = 1;
  }
  html.style.fontSize = size + "rem";
  console.log(size);
});

menos.addEventListener("click", () => {
  size = size - 0.1;
  if (size < 0.2) {
    size = 0.2;
  }
  html.style.fontSize = size + "rem";
  console.log(size);
});
