const navbarToggler = document.querySelector(".navbar__toggler");
const navbar = document.querySelector(".navbar");
const navbarNav = document.querySelector(".navbar__nav");

navbarToggler.addEventListener("click", handleNavClick);
navbarNav.addEventListener("click", handleNavClick);

function handleNavClick() {
  navbar.classList.toggle("nav-opened");
  navbarNav.classList.toggle("nav-opened");
}
