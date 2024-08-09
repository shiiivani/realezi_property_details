document.addEventListener("DOMContentLoaded", function () {
  const slider = document.querySelector(".compare-properties-slider");
  const slideRightBtn = document.getElementById("slideRightProperties");
  const slideLeftBtn = document.getElementById("slideLeftProperties");

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
