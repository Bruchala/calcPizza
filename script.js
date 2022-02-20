"use strict";
const section1 = document.querySelector("#section1");
const section2 = document.querySelector("#section2");
const width1 = document.querySelector("#width1");
const width2 = document.querySelector("#width2");
const price1 = document.querySelector("#price1");
const price2 = document.querySelector("#price2");
const piece1 = document.querySelector("#piece1");
const piece2 = document.querySelector("#piece2");
const check = document.querySelector(".check");
const img = document.querySelector(".img");
const results = document.querySelector(".results");
const show1 = document.querySelector(".show1");
const show2 = document.querySelector(".show2");
const show3 = document.querySelector(".show3");
const show4 = document.querySelector(".show4");
const xD = () => {
  if (
    width1.value > 0 &&
    width2.value > 0 &&
    price1.value > 0 &&
    price2.value > 0 &&
    piece1.value > 0 &&
    piece2.value > 0
  ) {
    const pizza1 = 3.14159265 * (width1.value / 2) ** 2 * piece1.value;
    const pizza2 = 3.14159265 * (width2.value / 2) ** 2 * piece2.value;
    const pizza1Fixed = pizza1.toFixed(2);
    const pizza2Fixed = pizza2.toFixed(2);
    const pizz1 = (price1.value / pizza1) * 100;
    const pizz2 = (price2.value / pizza2) * 100;
    const pizz1Fixed = pizz1.toFixed(2);
    const pizz2Fixed = pizz2.toFixed(2);
    const xD1 = () => {
      if (pizz1 < pizz2) {
        img.style.left = "2%";
        img.style.transition = "2s";
        section1.style.backgroundColor = "rgb(232, 226, 145)";
        section2.style.backgroundColor = "rgb(202, 226, 145)";
        show1.textContent = `Pole całkowite: ${pizza1Fixed} cm²`;
        show2.textContent = `Pole całkowite: ${pizza2Fixed} cm²`;
        show3.textContent = `Cena za 1 cm²: ${pizz1Fixed} gr`;
        show4.textContent = `Cena za 1 cm²: ${pizz2Fixed} gr`;
        show1.classList.remove("hidden");
        show2.classList.remove("hidden");
        show3.classList.remove("hidden");
        show4.classList.remove("hidden");
        console.log(pizza1);
        console.log(pizz1);
        console.log(price1.value);
        results.textContent = "Wybór 1 jest bardziej opłacalny";
      } else if (pizz1 > pizz2) {
        img.style.left = "85%";
        img.style.transition = "2s";
        section1.style.backgroundColor = "rgb(202, 226, 145)";
        section2.style.backgroundColor = "rgb(232, 226, 145)";
        show1.textContent = `Pole całkowite: ${pizza1Fixed} cm²`;
        show2.textContent = `Pole całkowite: ${pizza2Fixed} cm²`;
        show3.textContent = `Cena za 1 cm²: ${pizz1Fixed} gr`;
        show4.textContent = `Cena za 1 cm²: ${pizz2Fixed} gr`;
        show1.classList.remove("hidden");
        show2.classList.remove("hidden");
        show3.classList.remove("hidden");
        show4.classList.remove("hidden");
        results.textContent = "Wybór 2 jest bardziej opłacalny";
      }
    };
    xD1();
  }
};

check.addEventListener("click", xD);
