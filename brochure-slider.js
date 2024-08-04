document.addEventListener("DOMContentLoaded", function () {
  const slider = document.querySelector(".brochure-container-inner-slider");
  const slideRightBtn = document.getElementById("slideRightBrochures");

  slideRightBtn.addEventListener("click", function () {
    slider.scrollBy({
      left: 100,
      behavior: "smooth",
    });
  });
});
