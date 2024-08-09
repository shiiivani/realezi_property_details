document.addEventListener("DOMContentLoaded", function () {
  const slider = document.querySelector(".resources-container-inner-slider");
  const slideRightBtn = document.getElementById("slideRightResources");
  const slideLeftBtn = document.getElementById("slideLeftResources");

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
