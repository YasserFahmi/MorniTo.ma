// styling side bar
const toogle_open = document.getElementById("toggle-open");
const toogle_close = document.getElementById("toggle-close");
const sideBar = document.querySelector(".sidebar");
const sideOverlay = document.querySelector(".side-overlay");
const links = document.querySelector(".menu-links");
const all = document.querySelector("#All");
const overlay = document.querySelector(".overlay");
const body = document.querySelector("body");

toogle_open.addEventListener("click", () => {
  sideBar.classList.toggle("open-sidebar");
  all.classList.add("actif");
  body.classList.remove("stopScrolling");
  overlay.classList.add("active");
});

toogle_close.addEventListener("click", () => {
  sideBar.classList.remove("open-sidebar");
  all.classList.remove("actif");
  overlay.classList.remove("active");
});
links.addEventListener("click", () => {
  sideBar.classList.remove("open-sidebar");
  all.classList.remove("actif");
  overlay.classList.remove("active");
});

sideOverlay.addEventListener("click", () => {
  sideBar.classList.remove("open-sidebar");
  all.classList.remove("actif");
  overlay.classList.remove("active");
});

window.onscroll = () => {
  sideBar.classList.remove("open-sidebar");
  all.classList.remove("actif");
  overlay.classList.remove("active");
};

// styling switch mode

const moon = document.getElementById("moon");
const sun = document.getElementById("sun");

const switch_btn = document.querySelector(".Sw");
const switch_text = document.querySelector(".mode-text");

moon.addEventListener("click", () => {
  moon.classList.add("disable");
  sun.classList.add("able");
  body.classList.add("dark-mode");
  switch_btn.classList.add("Sw_active");
});

sun.addEventListener("click", () => {
  moon.classList.remove("disable");
  sun.classList.remove("able");
  body.classList.remove("dark-mode");
  switch_btn.classList.remove("Sw_active");
});

switch_btn.addEventListener("click", () => {
  switch_btn.classList.toggle("Sw_active");
  moon.classList.toggle("disable");
  sun.classList.toggle("able");
  body.classList.toggle("dark-mode");
});
