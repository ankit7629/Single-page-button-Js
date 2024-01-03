const button1 = document.querySelector(".button1");
const button2 = document.querySelector(".button2");
const button3 = document.querySelector(".button3");
const info1 = document.querySelector(".info1");
const info2 = document.querySelector(".info2");
const info3 = document.querySelector(".info3");

function activeBtn() {
  button1.addEventListener("click", () => {
    button1.classList.toggle("show");
    info1.classList.toggle("info-show");
    button2.classList.remove("show");
    info2.classList.remove("info-show");
    button3.classList.remove("show");
    info3.classList.remove("info-show");
  });
  button2.addEventListener("click", () => {
    button2.classList.toggle("show");
    info2.classList.toggle("info-show");
    button1.classList.remove("show");
    info1.classList.remove("info-show");
    button3.classList.remove("show");
    info3.classList.remove("info-show");
  });
  button3.addEventListener("click", () => {
    button3.classList.toggle("show");
    info3.classList.toggle("info-show");
    button1.classList.remove("show");
    info1.classList.remove("info-show");
    button2.classList.remove("show");
    info2.classList.remove("info-show");
  });
}

activeBtn();
