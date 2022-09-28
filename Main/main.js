let mobile_nav = document.querySelector(".navbar-links");
// mobile_nav.classList.remove("mobile-nav");

document
  .querySelector(".toggle-button")
  .addEventListener("click", () => mobile_nav.classList.toggle("mobile-nav"));
