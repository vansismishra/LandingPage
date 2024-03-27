const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) => {
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

navLinks.addEventListener("click", (e) => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-line");
});

const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

ScrollReveal().reveal(".header__image img", {
  ...scrollRevealOption,
  origin: "right",
});
ScrollReveal().reveal(".header__content h1", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".header__content .section__description", {
  ...scrollRevealOption,
  delay: 1000,
});
ScrollReveal().reveal(".header__content .header__btn", {
  ...scrollRevealOption,
  delay: 1500,
});

ScrollReveal().reveal(".explore__image img", {
  ...scrollRevealOption,
  origin: "left",
});
ScrollReveal().reveal(".explore__content .section__header", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".explore__content .section__description", {
  ...scrollRevealOption,
  delay: 1000,
});
ScrollReveal().reveal(".explore__content .explore__btn", {
  ...scrollRevealOption,
  delay: 1500,
});

ScrollReveal().reveal(".banner__card", {
  ...scrollRevealOption,
  interval: 500,
});

const swiper = new Swiper(".swiper", {
  loop: true,

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  lazy: {
    loadPrevNext: true,
  },
});

let count1 = setInterval(updated1, 250);
let count2 = setInterval(updated2, 200);
let count3 = setInterval(updated3, 100);
let count4 = setInterval(updated4, 10);
let count5 = setInterval(updated5, 3);
let upto1 = 0;
let upto2 = 0;
let upto3 = 0;
let upto4 = 0;
let upto5 = 0;

function updated1() {
    let counter1 = document.getElementById("counter1");
    counter1.innerHTML = ++upto1;
    if (upto1 === 5) {
        clearInterval(count1);
    }
}

function updated2() {
    let counter2 = document.getElementById("counter2");
    counter2.innerHTML = ++upto2;
    if (upto2 === 6) {
        clearInterval(count2);
    }
}

function updated3() {
    let counter3 = document.getElementById("counter3");
    counter3.innerHTML = ++upto3;
    if (upto3 === 14) {
        clearInterval(count3);
    }
}

function updated4() {
    let counter4 = document.getElementById("counter4");
    upto4 += 100;
    counter4.innerHTML = upto4 + '+';
    if (upto4 === 7000) {
        clearInterval(count4);
    }
}

function updated5() {
    let counter5 = document.getElementById("counter5");
    upto5 += 200;
    counter5.innerHTML = upto5 + '+';
    if (upto5 === 57000) {
        clearInterval(count5);
    }
}