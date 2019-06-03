// Navigation
let nav = document.querySelector(".nav");
let navBtns = nav.querySelectorAll(".nav__buttons--button");
let navHeight = nav.offsetHeight;

function sectionScroll(e) {
  e.preventDefault();
  let section = e.target.dataset.section;
  let scrollValue = document.querySelector(`#${section}`).offsetTop - navHeight;

  window.scrollTo({
    top: scrollValue,
    left: 0,
    behavior: "smooth"
  });
  return false;
}

navBtns.forEach(btn => btn.addEventListener("click", sectionScroll));

// Footer date
const date = document.querySelector("#date");

date.textContent = new Date().getFullYear();
