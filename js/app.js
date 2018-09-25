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

  function sortLocations() {
    const parentLocation = document.querySelector(".locations__location");
    const parentLocationRo = document.querySelector(".locations__ro");
    const locationsText = document.querySelectorAll(".locations__text");

    const locationsAu = [
      {
        name: "Graz"
      },
      {
        name: "Wiener Neustadt"
      },
      {
        name: "Parndorf"
      },
      {
        name: "Viena"
      },
      {
        name: "Sankt Pölten"
      },
      {
        name: "Melk"
      },
      {
        name: "Amstetten"
      },
      {
        name: "Enns"
      },
      {
        name: "Linz"
      },
      {
        name: "Traun"
      },
      {
        name: "Wels"
      },
      {
        name: "Salzburg"
      },
      {
        name: "Villach"
      },
      {
        name: "Klagenfurt"
      },
      {
        name: "Wolfsberg"
      },
      {
        name: "Leoben"
      },
      {
        name: "Liezen"
      },
      {
        name: "Flachau"
      },
      {
        name: "Zell am See"
      },
      {
        name: "Bruck an der Mur"
      },
      {
        name: "Hartberg"
      },
      {
        name: "Gleisdorf"
      },
      {
        name: "Innsbruck"
      }
    ];

    const locationsRo = [
      {
        name: "Otelu Roșu"
      },
      {
        name: "Lugoj "
      },
      {
        name: "Reșița"
      },
      {
        name: "Bocsa"
      },
      {
        name: "Timisoara"
      },
      {
        name: "Arad"
      },
      {
        name: "Jimbolia"
      },
      {
        name: "Sannicolau Mare"
      },
      {
        name: "București"
      },
      {
        name: "Pitești"
      },
      {
        name: "Slatina"
      },
      {
        name: "Balș"
      },
      {
        name: "Craiova"
      },
      {
        name: "Filiași"
      },
      {
        name: "Strehaia"
      },
      {
        name: "Drobeta-Turnu"
      },
      {
        name: "Orsova"
      },
      {
        name: "Caransebeș"
      },
      {
        name: "Cenad"
      },
      {
        name: "Iași"
      },
      {
        name: "Bacău"
      },
      {
        name: "Huși"
      },
      {
        name: "Bârlad"
      },
      {
        name: "Vaslui"
      },
      {
        name: "Onești"
      },
      {
        name: "Brașov"
      },
      {
        name: "Sighișoara"
      },
      {
        name: "Mediaș"
      },
      {
        name: "Sibiu"
      },
      {
        name: "Alba Iulia"
      },
      {
        name: "Sebeș"
      },
      {
        name: "Deva"
      },
      {
        name: "Ilia"
      },
      {
        name: "Savârsin"
      },
      {
        name: "Lipova"
      }
    ];

    locationsAu.sort((a, b) => {
      if (a.name < b.name) return -1;
      if (a.name > b.name) return 1;
      return 0;
    });

    locationsRo.sort((a, b) => {
      if (a.name < b.name) return -1;
      if (a.name > b.name) return 1;
      return 0;
    });

    function createLocation(loc, parent) {
      const locationText = document.createElement("p");
      locationText.classList.add("locations__text");
      locationText.textContent = loc.name;
      locationText.addEventListener("click", () => {
        location.replace("../contact.html");
      });
      parent.appendChild(locationText);
    }

    locationsAu.map(location => {
      createLocation(location, parentLocation);
    });

    locationsRo.map(location => {
      createLocation(location, parentLocationRo);
    });

    locationsText.forEach(loc => {
      loc.addEventListener("click", () => {
        location.replace("../contact.html");
      });
    });
  }

  sortLocations();
}

function contactInit() {
  const formInput = document.querySelectorAll(".contact__form-input");
  const form = document.querySelector(".contact__form");
  const spanAlert = document.querySelector(".contact__form-alert");

  form.addEventListener("submit", e => {
    formInput.forEach(input => {
      if (input.value === "") {
        e.preventDefault();
        spanAlert.textContent = "Toate campurile trebuie completate";
      } else {
        spanAlert.textContent = "Rezervatia d-voastra a fost trimisa";
      }
    });
  });

  navbar();
}
