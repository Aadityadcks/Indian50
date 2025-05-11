const button = document.getElementById("scrollButton");
let currentSlide = 0;

button.addEventListener("click", () => {
  const slides = document.querySelectorAll(".news-slide");
  currentSlide = (currentSlide + 1) % slides.length;
  slides[currentSlide].scrollIntoView({ behavior: "smooth" });
});
