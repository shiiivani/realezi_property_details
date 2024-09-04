document.addEventListener("DOMContentLoaded", function () {
  const slider = document.querySelector(".listed-properties-container-slider");
  const slideRightBtn = document.getElementById("slideRightRelatedProperties");
  const slideLeftBtn = document.getElementById("slideLeftRelatedProperties");

  slideRightBtn.addEventListener("click", function () {
    slideLeftBtn.classList.remove("hidden");
    slider.scrollBy({
      left: 200,
      behavior: "smooth",
    });
  });

  slideLeftBtn.addEventListener("click", function () {
    slider.scrollBy({
      left: -250,
      behavior: "smooth",
    });
  });
});
