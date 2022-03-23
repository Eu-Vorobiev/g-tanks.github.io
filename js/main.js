document.addEventListener("DOMContentLoaded", function () {
  let menuBtn = document.querySelector("#menu");
  let menu = document.querySelector(".header__inner");
  let header = document.querySelector(".header");
  let newsSlider = document.querySelector(".news__slider");

  const enableScroll = () => {
    document.body.style.cssText = '';
    document.body.className = '';
  };

  function removeNav() {
    menuBtn.classList.remove("active");
    menu.classList.remove("active");
    header.classList.remove("b-bottom");
    enableScroll();
  }

  menuBtn.addEventListener("click", function () {
    this.classList.toggle("active");
    menu.classList.toggle("active");
    header.classList.toggle("b-bottom");
    document.body.classList.toggle("no-scroll");
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 991) {
      removeNav();
    }
  });

  if (newsSlider) {
    const swiper = new Swiper('.news__slider ', {
      spaceBetween: 20,
      loop: true,
      navigation: {
        nextEl: '#slider-btn-next',
        prevEl: '#slider-btn-prev',
      },
      breakpoints: {
        320: {
          slidesPerView: 1,
        },
        769: {
          slidesPerView: 2,
        },
        1301: {
          slidesPerView: 3,
        }
      }
    });
  }
});