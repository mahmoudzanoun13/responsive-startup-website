const menu = document.querySelector(".hamburger");
const nav = document.querySelector(".active-nav");
const listItemsOne = Array.from(
  document.querySelectorAll("header nav ul li a")
);
const listItemsTwo = Array.from(
  document.querySelectorAll(".active-nav ul li a")
);
const activePage = location.href;
const toTop = document.querySelector(".up");
menu.addEventListener("click", () => {
  if (nav.classList.contains("open")) {
    nav.classList.remove("open");
    nav.classList.add("closed");
  } else {
    nav.classList.remove("closed");
    nav.classList.add("open");
  }
});
listItemsOne.forEach((item) => {
  if (item.href === activePage) {
    item.classList.add("active");
  }
});
listItemsTwo.forEach((item) => {
  if (item.href === activePage) {
    item.classList.add("active");
  }
});

window.onscroll = () => {
  if (this.scrollY >= 1000) {
    toTop.classList.add("show");
  } else {
    toTop.classList.remove("show");
  }
};

toTop.onclick = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};
