for (let i = 0; i < 400; i++) {
  let drop = document.createElement("div");
  drop.classList.add("raindrop");
  document.body.appendChild(drop);

  drop.style.left = Math.random() * window.innerWidth + "px";
  drop.style.animationDelay = Math.random() * 4 + "s";
}
