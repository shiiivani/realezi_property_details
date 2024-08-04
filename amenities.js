document.addEventListener("DOMContentLoaded", function () {
  const slider = document.querySelector(".amenities-container-inner-slider");
  const slideRightBtn = document.getElementById("slideRightAmenities");

  slideRightBtn.addEventListener("click", function () {
    slider.scrollBy({
      left: 140,
      behavior: "smooth",
    });
  });
});
