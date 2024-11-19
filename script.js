let tg = window.Telegram.WebApp;
tg.expand();
tg.setHeaderColor("#000000");

const clickButton = document.querySelector("#clickButton");
const balanceText = document.querySelector("#balanceValue");

let clickPower = 1;
let balance = 0;

function floatText(x, y, text) {
  const floatingText = document.createElement("div");
  floatingText.className = "floating-text";
  floatingText.style.top = `${y}px`;
  floatingText.style.left = `${x}px`;
  floatingText.textContent = text.toLocaleString();
  document.body.appendChild(floatingText);
  setTimeout(() => {
    floatingText.classList.add("float-anim");
    setTimeout(() => {
      document.body.removeChild(floatingText);
    }, 1500);
  }, 1);
}

function addBalance(addBall) {
  balance += addBall;
  balanceText.innerHTML = balance.toLocaleString();
}

clickButton.addEventListener("pointerdown", event => {
  const { clientX: x, clientY: y } = event;
  floatText(x, y, clickPower);
  addBalance(clickPower);
});