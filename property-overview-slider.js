document.addEventListener("DOMContentLoaded", function () {
  const slider = document.querySelector(".property-overview-slider");
  const slideRightBtn = document.getElementById("slideRightDetails");
  const slideLeftBtn = document.getElementById("slideLeftDetails");
  const div = document.querySelector(".property-overview-slider .d-flex div");

  slideRightBtn.addEventListener("click", function () {
    slideLeftBtn.classList.remove("hidden");
    slider.scrollBy({
      left: 180,
      behavior: "smooth",
    });
    div.style.marginLeft = "40px";
  });

  slideLeftBtn.addEventListener("click", function () {
    slider.scrollBy({
      left: -180,
      behavior: "smooth",
    });
  });
});
