//NAV
const nav = document.querySelector(".nav");
const burger = document.querySelector(".burger");
const navLinks = document.querySelectorAll(".nav__link");

navLinks.forEach(link =>
  link.addEventListener("click", () => {
    nav.classList.remove("active");
    burger.classList.remove("active");
  })
);
burger.addEventListener("click", () => {
  nav.classList.toggle("active");
  burger.classList.toggle("active");
});
//Slider
const slider = document.querySelector(".slider");
const slides = document.querySelectorAll(".slide");
const prevBtn = document.querySelector("#prevBtn");
const nextBtn = document.querySelector("#nextBtn");

let counter = 1;

let slideSize = slides[0].clientWidth;
window.addEventListener("resize", () => {
  slideSize = slides[0].clientWidth;
  slider.style.transform = `translateX(${-slideSize * counter}px)`;
});

slider.style.transform = `translateX(${-slideSize * counter}px)`;

nextBtn.addEventListener("click", () => {
  if (counter >= slides.length - 1) {
    return;
  }
  slider.style.transition = "transform 0.4s ease-in-out";
  counter++;
  slider.style.transform = `translateX(${-slideSize * counter}px)`;
});

prevBtn.addEventListener("click", () => {
  if (0 >= counter) {
    return;
  }
  slider.style.transition = "transform 0.4s ease-in-out";
  counter--;
  slider.style.transform = `translateX(${-slideSize * counter}px)`;
});

slider.addEventListener("transitionend", () => {
  if (slides[counter].id === "last") {
    slider.style.transition = "none";
    counter = slides.length - 2;
    slider.style.transform = `translateX(${-slideSize * counter}px)`;
  }
  if (slides[counter].id === "first") {
    slider.style.transition = "none";
    counter = slides.length - counter;
    slider.style.transform = `translateX(${-slideSize * counter}px)`;
  }
});
