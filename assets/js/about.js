const navBar = document.querySelector("nav");
const bars = document.querySelector(".navIcon");


var swiper = new Swiper(".mySwiper", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

bars.addEventListener("click", () => {
  document.querySelector(".navLinks").classList.add("d_noneL");
  document.querySelector(".aside").classList.remove("d_noneL");
  document.querySelector(".aside").classList.remove("d_noneM");
  document.querySelector(".aside").classList.remove("d_noneT");
  document.querySelector(".aside").style.display = "flex !important";
});

function closeSideBar() {
  document.querySelector(".aside").classList.add("d_noneL");
  document.querySelector(".aside").classList.add("d_noneM");
  document.querySelector(".aside").classList.add("d_noneT");
  document.querySelector(".navLinks").classList.remove("d_noneL");
}

window.addEventListener("scroll", (e) => {
  // console.log(scrollY)
  if (window.scrollY > 0) {
    navBar.classList.remove("animate__fadeInUp");
    navBar.classList.add("animate__fadeInDown");
    navBar.classList.add("navScroll");
  } else {
    navBar.classList.remove("animate__fadeInDown");
    navBar.classList.add("animate__fadeInUp");
    navBar.classList.remove("navScroll");
  }
});
