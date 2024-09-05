// Amenities Slider
document.addEventListener("DOMContentLoaded", function () {
  const slider = document.querySelector(".amenities-container-inner-slider");
  const slideRightBtn = document.getElementById("slideRightAmenities");
  const slideLeftBtn = document.getElementById("slideLeftAmenities");

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
