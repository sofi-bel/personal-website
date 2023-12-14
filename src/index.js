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

function checkDarkModeSettings() {
  const btnDarkMode = document.querySelector(".dark-mode-btn");

  if (
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches
  ) {
    btnDarkMode.classList.add("dark-mode-btn_active");
    document.body.classList.add("page_theme_dark");
  }

  if (localStorage.getItem("darkMode") === "dark") {
    btnDarkMode.classList.add("dark-mode-btn_active");
    document.body.classList.add("page_theme_dark");
  } else if (localStorage.getItem("darkMode") === "light") {
    btnDarkMode.classList.remove("dark-mode-btn_active");
    document.body.classList.remove("page_theme_dark");
  }

  window
    .matchMedia("(prefers-color-scheme: dark)")
    .addEventListener("change", (event) => {
      const newColorScheme = event.matches ? "dark" : "light";

      if (newColorScheme === "dark") {
        btnDarkMode.classList.add("dark-mode-btn_active");
        document.body.classList.add("page_theme_dark");
        localStorage.setItem("darkMode", "dark");
      } else {
        btnDarkMode.classList.remove("dark-mode-btn_active");
        document.body.classList.remove("page_theme_dark");
        localStorage.setItem("darkMode", "light");
      }
    });

  btnDarkMode.onclick = function () {
    btnDarkMode.classList.toggle("dark-mode-btn_active");
    const isDark = document.body.classList.toggle("page_theme_dark");

    if (isDark) {
      localStorage.setItem("darkMode", "dark");
    } else {
      localStorage.setItem("darkMode", "light");
    }
  };
}

document.addEventListener("DOMContentLoaded", () => {
  const navbarToggler = document.querySelector(".navbar__toggler");
  const navbar = document.querySelector(".navbar");
  const navbarNav = document.querySelector(".navbar__nav");

  navbarToggler.addEventListener("click", () => {
    toggleTwoClasses(navbar, "nav-is-visible", "nav-is-hidden", 500);
    toggleTwoClasses(navbarNav, "nav-is-visible", "nav-is-hidden", 500);
  });

  checkDarkModeSettings();
});
