document.addEventListener("DOMContentLoaded", function () {
  const slider = document.querySelector(".categories-slider");
  const slideRightBtn = document.getElementById("slideRightBtn");

  slideRightBtn.addEventListener("click", function () {
    slider.scrollBy({
      left: 100,
      behavior: "smooth",
    });
  });
});
