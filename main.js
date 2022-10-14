let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("slide");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

// slideup/slidedown
trigger1 = function () {
  Slider1.classList.toggle("slide-down");
};

trigger2 = function () {
  Slider2.classList.toggle("slide-down");
};

trigger3 = function () {
  Slider3.classList.toggle("slide-down");
};

trigger4 = function () {
  Slider4.classList.toggle("slide-down");
};

trigger5 = function () {
  Slider5.classList.toggle("slide-down");
};
