document.addEventListener("DOMContentLoaded", function () {
  const slider = document.querySelector(".inventory-container-slider");
  const slideRightBtn = document.getElementById("slideRightInventory");
  const slideLeftBtn = document.getElementById("slideLeftInventory");

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
