const nav = document.querySelector("nav");
const menu = document.querySelector(".fa-bars");
const darkmode = document.querySelector(".fa-moon");
const body = document.body;
/*=============== SHOW MENU ===============*/

/*=============== REMOVE MENU MOBILE ===============*/

menu.addEventListener("click", () => {
  nav.classList.toggle("active");
});

/*=============== CHANGE BACKGROUND HEADER ===============*/

darkmode.addEventListener("click", () => {
  body.classList.toggle("darkmode");
});

/*=============== SHOW SCROLL UP ===============*/

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/

/*=============== DARK LIGHT THEME ===============*/

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
  origin: "top",
  distance: "60px",
  duration: 1500,
  delay: 300,
  reset: true,
});

sr.reveal("#home, .popularTitle, #recently, .newsletter");
sr.reveal("#about, .deck", { delay: 500 });
