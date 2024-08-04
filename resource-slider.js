document.addEventListener("DOMContentLoaded", function () {
  const slider = document.querySelector(".resources-container-inner-slider");
  const slideRightBtn = document.getElementById("slideRightResources");

  slideRightBtn.addEventListener("click", function () {
    slider.scrollBy({
      left: 100,
      behavior: "smooth",
    });
  });
});
