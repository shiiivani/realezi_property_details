document.addEventListener("DOMContentLoaded", function () {
  const slider = document.querySelector(".compare-properties-slider");
  const slideRightBtn = document.getElementById("slideRightProperties");

  slideRightBtn.addEventListener("click", function () {
    slider.scrollBy({
      left: 200,
      behavior: "smooth",
    });
  });
});
