const prev = document.querySelector(".buttons").children[0];
const next = document.querySelector(".buttons").children[1];
const num1 = document.querySelector(".numbers").children[0];
const num2 = document.querySelector(".numbers").children[1];
const num3 = document.querySelector(".numbers").children[2];
const num4 = document.querySelector(".numbers").children[3];
const num5 = document.querySelector(".numbers").children[4];
const num6 = document.querySelector(".numbers").children[5];

const p = document.querySelector(".message");
const close = document.querySelector(".close");
const steps = document.querySelector(".steps");

let flag = true;
let step = 1;
num1.classList.add("active");
const messages = [
  "Обери мову програмування",
  "Розроби самостійний план навчання",
  "Заверши пристойний навчальний курс",
  "Визначи свій рівень",
  "Створи портфоліо",
  "Все в твоїх руках",
];
p.textContent = messages[0];

function closeMenu() {
  if (flag) {
    steps.style.display = "none";
  } else {
    steps.style.display = "block";
  }
  flag = !flag;
}

function handlePrev() {
  if (step > 1) {
    step--;
  }

  if (step === 5) {
    num6.classList.remove("active");
    p.textContent = messages[4];
  }
  if (step === 4) {
    num5.classList.remove("active");
    p.textContent = messages[3];
  }
  if (step === 3) {
    num4.classList.remove("active");
    p.textContent = messages[2];
  }
  if (step === 2) {
    num3.classList.remove("active");
    p.textContent = messages[1];
  }
  if (step === 1) {
    num2.classList.remove("active");
    p.textContent = messages[0];
  }

  console.log(step);
}
function handleNext() {
  if (step < 6) {
    step++;
  }

  if (step === 2) {
    num2.classList.add("active");
    p.textContent = messages[1];
  }
  if (step === 3) {
    num3.classList.add("active");
    p.textContent = messages[2];
  }
  if (step === 4) {
    num4.classList.add("active");
    p.textContent = messages[3];
  }
  if (step === 5) {
    num5.classList.add("active");
    p.textContent = messages[4];
  }
  if (step === 6) {
    num6.classList.add("active");
    p.textContent = messages[5];
  }

  console.log(step);
}

prev.addEventListener("click", handlePrev);

next.addEventListener("click", handleNext);

close.addEventListener("click", closeMenu);

console.log(step);
