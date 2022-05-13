// show nav bar

const bar = document.getElementById("bar");
const close = document.getElementById("close");
const nav = document.getElementById("navbar");

if (bar) {
  bar.addEventListener("click", () => {
    nav.classList.add("active");
  });
}

if (close) {
  close.addEventListener("click", () => {
    nav.classList.remove("active");
  });
}

// Change header color
window.onscroll = () => {
  const header = document.getElementById("header");
  if (this.scrollY >= 200) header.classList.add("scroll-header");
  else {
    header.classList.remove("scroll-header");
  }
};

// Active link
const linkActive = document.querySelectorAll(".nav__menu");

function activeLink() {
  if (linkActive) {
    linkPortfolio.forEach((l) => l.classList.remove("active-portfolio"));
    this.classList.add("active-link");
  }
}
linkActive.forEach((l) => l.addEventListener("click", activeLink));

// image slide shop page
let mainImg = document.getElementsByClassName("mainImg")[0];
let small = document.getElementsByClassName("small-img");

small[0].addEventListener("click", () => {
  mainImg.src = "img/products/f1.jpg";
});

small[1].addEventListener("click", () => {
  mainImg.src = "img/products/f2.jpg";
});

small[2].addEventListener("click", () => {
  mainImg.src = "img/products/f3.jpg";
});

small[3].addEventListener("click", () => {
  mainImg.src = "img/products/f4.jpg";
});
