import "./style.css";

window.onload = function() {
  const root = document.getElementById("root");
  const newCardBtn = document.getElementById("newCard");
  const startBtn = document.getElementById("start");
  const stopBtn = document.getElementById("stop");

  const values = {
    suit: ["♦", "♥", "♠", "♣"],
    generateValue() {
      let num = Math.trunc(Math.random() * 14 + 1);

      return num === 11
        ? "J"
        : num === 12
        ? "Q"
        : num === 13
        ? "K"
        : num === 1
        ? "A"
        : num === 14
        ? "Jk"
        : num;
    },
    generateSuit() {
      return this.suit[Math.floor(Math.random() * 4)];
    }
  };

  const newCardHandler = () => {
    let suit = values.generateSuit();
    let value = values.generateValue();
    let joker = `<div class='card joker'>
          <div class="card__value ${
            suit === "♦" || suit === "♥" ? "red" : "black"
          }">
            Why so serious? 😈
          </div>   
    </div>`;

    let noJoker = `<div class='card'>
    <div class='card__upper ${
      suit === "♦" || suit === "♥" ? "red" : "black"
    }'>${suit}</div>
    <div class='card__value'>${value}</div>
    <div class='card__bottom ${
      suit === "♦" || suit === "♥" ? "red" : "black"
    }'>${suit}</div>
  </div>`;

    root.innerHTML = value === "Jk" ? joker : noJoker;
  };

  let myTimer;
  const startTimer = () => {
    newCardHandler();
    myTimer = setInterval(newCardHandler, 5000); //in order to make testing easier, I set the timer to 5 seconds
    newCardBtn.classList.toggle("hidden");
    stopBtn.classList.toggle("hidden");
    startBtn.classList.toggle("hidden");
  };

  const stopTimer = () => {
    clearInterval(myTimer);
    stopBtn.classList.toggle("hidden");
    newCardBtn.classList.toggle("hidden");
    startBtn.classList.toggle("hidden");
  };
  newCardBtn.addEventListener("click", newCardHandler);
  startBtn.addEventListener("click", startTimer);
  stopBtn.addEventListener("click", stopTimer);
};
