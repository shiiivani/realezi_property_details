document.addEventListener("DOMContentLoaded", function () {
  const slider = document.querySelector(".explore-nearby-container-slider");
  const slideRightBtn = document.getElementById("slideRightLocations");
  const slideLeftBtn = document.getElementById("slideLeftLocations");

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
