// Brochure section slider
document.addEventListener("DOMContentLoaded", function () {
  const slider = document.querySelector(".brochure-container-inner-slider");
  const slideRightBtn = document.getElementById("slideRightBrochures");
  const slideLeftBtn = document.getElementById("slideLeftBrochures");

  slideRightBtn.addEventListener("click", function () {
    slideLeftBtn.classList.remove("hidden");
    slider.scrollBy({
      left: 100,
      behavior: "smooth",
    });
  });

  slideLeftBtn.addEventListener("click", function () {
    slider.scrollBy({
      left: -150,
      behavior: "smooth",
    });
  });
});
