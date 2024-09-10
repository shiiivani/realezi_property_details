document.addEventListener("DOMContentLoaded", function () {
  const slider = document.querySelector(".compare-properties-slider");
  const slideRightBtn = document.getElementById("slideRightProperties");
  const slideLeftBtn = document.getElementById("slideLeftProperties");

  slideRightBtn.addEventListener("click", function () {
    slideLeftBtn.classList.remove("hidden");
    slider.scrollBy({
      left: 280,
      behavior: "smooth",
    });
  });

  slideLeftBtn.addEventListener("click", function () {
    slider.scrollBy({
      left: -280,
      behavior: "smooth",
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const seeMoreBtn = document.querySelector(".see-more-btn");
  const comparePropertyContainer = document.querySelector(
    ".compare-property-container-inner"
  );

  seeMoreBtn.addEventListener("click", function () {
    comparePropertyContainer.classList.toggle("fullLenth");

    if (comparePropertyContainer.classList.contains("fullLenth")) {
      seeMoreBtn.textContent = "See less";
    } else {
      seeMoreBtn.textContent = "See more";
    }
  });
});
