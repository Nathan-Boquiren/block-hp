let cl = console.log;

cl(
  "This website was created by Nathan Boquiren. For your own personal website, or an online resume/cv, contact me at nathanjboquiren@gmail."
);
// ========== DOM Elements ==========

let hamburger = document.getElementById("hamburger");
let navMenu = document.getElementById("nav-menu");
let links = document.querySelectorAll(".link");

// ========== Hamburger Menu ==========

hamburger.addEventListener("click", () => {
  if (navMenu.classList.contains("open")) {
    navMenu.classList.remove("open");
    hamburger.classList.remove("hamburger-open");
  } else {
    navMenu.classList.add("open");
    hamburger.classList.add("hamburger-open");
  }
});

document.addEventListener("click", (e) => {
  if (!navMenu.contains(e.target) && !hamburger.contains(e.target)) {
    navMenu.classList.remove("open");
    hamburger.classList.remove("hamburger-open");
  }
});

links.forEach((link) => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("open");
    hamburger.classList.remove("hamburger-open");
  });
});

// ========== Gallery Scroll Animations ==========

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      setTimeout(() => {
        entry.target.classList.add("animate");
      }, 100);
    }
  });
});

const galleryImgs = document.querySelectorAll(".img-wrapper");

galleryImgs.forEach((img) => observer.observe(img));
