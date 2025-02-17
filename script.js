let cl = console.log;

// ========== DOM Elements ==========

let hamburger = document.getElementById("hamburger");
let navMenu = document.getElementById("nav-menu");

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

// ========== Gallery Scroll Snap Thing ==========
