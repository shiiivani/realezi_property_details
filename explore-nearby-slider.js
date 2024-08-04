document.addEventListener("DOMContentLoaded", function () {
  const slider = document.querySelector(".explore-nearby-container-slider");
  const slideRightBtn = document.getElementById("slideRightLocations");

  slideRightBtn.addEventListener("click", function () {
    slider.scrollBy({
      left: 140,
      behavior: "smooth",
    });
  });
});
