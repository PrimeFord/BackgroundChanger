const bodyEl = document.querySelector("body");
const btn = document.querySelector(".button");
const colors = [
  "red",
  "orange",
  "yellow",
  "green",
  "blue",
  "indigo",
  "violet",
  "purple",
  "pink",
  "silver",
  "gold",
  "beige",
  "brown",
  "gray",
  "black",
  "white",
];

btn.addEventListener(
  "click",
  (randomBg = () => {
    for (let i = 0; i < colors.length; i++) {
      const rand = Math.floor(Math.random() * colors.length);
      let randBg = colors[rand];
      bodyEl.style.background = randBg;
    }
  })
);
