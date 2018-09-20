let slideIndex, slides, dots, captionText;

function initGallery() {
  slideIndex = 0;
  slides = document.getElementsByClassName("imageHolder");
  slides[slideIndex].style.opacity = 1;

  captionText = document.querySelector(".captionText");
  captionText.textContent = slides[slideIndex].querySelector(
    ".captionText"
  ).innerText;

  dots = [];
  const dotsContainer = document.getElementById("dotsContainer");
  for (let i = 0; i < slides.length; i++) {
    const dot = document.createElement("span");
    dot.classList.add("dots");
    dot.setAttribute("onClick", "moveSlide(" + i + ")");
    dotsContainer.appendChild(dot);
    dots.push(dot);
  }
  dots[slideIndex].classList.add("active");
}

function plusSlides(n) {
  moveSlide(slideIndex + n);
}

function moveSlide(n) {
  let i, current, next;
  const moveSlideAnimClass = {
    forCurrent: "",
    forNext: ""
  };

  let slideTextAnimClass;

  if (n > slideIndex) {
    if (n >= slides.length) {
      n = 0;
    }
    moveSlideAnimClass.forCurrent = "moveLeftCurrentSlide";
    moveSlideAnimClass.forNext = "moveLeftNextSlide";
    slideTextAnimClass = "slideTextFromTop";
  } else if (n < slideIndex) {
    if (n < 0) {
      n = slides.length - 1;
    }
    moveSlideAnimClass.forCurrent = "moveRightCurrentSlide";
    moveSlideAnimClass.forNext = "moveRightNextSlide";
    slideTextAnimClass = "slideTextFromBottom";
  }

  if (n !== slideIndex) {
    next = slides[n];
    current = slides[slideIndex];
    for (i = 0; i < slides.length; i++) {
      slides[i].className = "imageHolder";
      slides[i].style.opacity = 0;
      dots[i].classList.remove("active");
    }
    current.classList.add(moveSlideAnimClass.forCurrent);
    next.classList.add(moveSlideAnimClass.forNext);
    dots[n].classList.add("active");
    slideIndex = n;
  }
  captionText.style.display = "none";
  captionText.className = "captionText " + slideTextAnimClass;
  captionText.innerText = slides[n].querySelector(".captionText").innerText;
  captionText.style.display = "block";
}

let timer = null;
function setTimer() {
  timer = setInterval(function() {
    plusSlides(1);
  }, 5000);
}
setTimer();

function playPauseSlides() {
  const playPauseBtn = document.getElementById("playPauseBtn");
  if (timer === null) {
    setTimer();
    playPauseBtn.style.backgroundPositionY = "-33px";
  } else {
    clearInterval(timer);
    timer = null;
    playPauseBtn.style.backgroundPositionY = "0px";
  }
}

function navbar() {
  const navbar = document.querySelector(".header");
  const navbarTop = navbar.getBoundingClientRect().top;
  const menu = document.querySelector(".menu");
  const menuOne = document.querySelector(".menu__one");

  function fixedNav() {
    if (navbarTop >= window.scrollY) {
      document.body.style.paddingTop = 0;
      navbar.classList.remove("active-header");
    } else if (navbarTop <= window.scrollY) {
      document.body.style.paddingTop = navbar.offsetHeight + "px";
      navbar.classList.add("active-header");
    }
  }

  function openMenu() {
    menuOne.classList.toggle("menu__two");
  }

  menu.addEventListener("click", openMenu);
  window.addEventListener("scroll", fixedNav);
}

function indexInit() {
  initGallery();
  navbar();
}
