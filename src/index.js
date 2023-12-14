document.addEventListener("DOMContentLoaded", () => {
  const navbarToggler = document.querySelector(".navbar__toggler");
  const navbar = document.querySelector(".navbar");
  const navbarNav = document.querySelector(".navbar__nav");

  navbarToggler.addEventListener("click", () => {
    toggleTwoClasses(navbar, "nav-is-visible", "nav-is-hidden", 500);
    toggleTwoClasses(navbarNav, "nav-is-visible", "nav-is-hidden", 500);
  });
});

function toggleTwoClasses(element, first, second, timeOfAnimation) {
  if (!element.classList.contains(first)) {
    element.classList.add(first);
    element.classList.remove(second);
  } else {
    element.classList.add(second);
    window.setTimeout(function () {
      element.classList.remove(first);
    }, timeOfAnimation);
  }
}
