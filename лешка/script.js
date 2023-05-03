const prevBtn = document.querySelector('.prev-slide');
const nextBtn = document.querySelector('.next-slide');
const slides = document.querySelectorAll('.slider-wrapper img');
let slideIndex = 0;

function showSlide(index) {
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }
  slides[index].style.display = 'block';
}

function prevSlide() {
  slideIndex--;
  if (slideIndex < 0) {
    slideIndex = slides.length - 1;
  }
  showSlide(slideIndex);
}

function nextSlide() {
  slideIndex++;
  if (slideIndex >= slides.length) {
    slideIndex = 0;
  }
  showSlide(slideIndex);
}

showSlide(slideIndex);
prevBtn.addEventListener('click', prevSlide);
nextBtn.addEventListener('click', nextSlide);
