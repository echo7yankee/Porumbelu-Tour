function navbar() {
  const navbar = document.querySelector(".header");
  const menu = document.querySelector(".menu");
  const menuOne = document.querySelector(".menu__one");
  const menuSpan = document.querySelector(".menu__span");

  function openMenu() {
    menuOne.classList.toggle("menu__two");
    navbar.classList.toggle("active-header-phone");
  }

  menu.addEventListener("click", openMenu);
}

function indexInit() {
  function slider() {
    let slideIndex, slides, dots, captionText;
    const playPauseBtn = document.getElementById("playPauseBtn");
    const leftArrow = document.querySelector(".leftArrow");
    const rightArrow = document.querySelector(".rightArrow");

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
        dot.addEventListener("click", () => {
          moveSlide(i);
        });
        dotsContainer.appendChild(dot);
        dots.push(dot);
      }
      dots[slideIndex].classList.add("active");
    }

    initGallery();

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
      if (timer === null) {
        setTimer();
        playPauseBtn.style.backgroundPositionY = "-33px";
      } else {
        clearInterval(timer);
        timer = null;
        playPauseBtn.style.backgroundPositionY = "0px";
      }
    }

    leftArrow.addEventListener("click", () => {
      plusSlides(-1);
    });
    rightArrow.addEventListener("click", () => {
      plusSlides(1);
    });
    playPauseBtn.addEventListener("click", () => {
      playPauseSlides();
    });
  }
  slider();
  navbar();
}

function contactInit() {
  navbar();
}
