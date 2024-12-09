// document.addEventListener("DOMContentLoaded", function () {
//   const slider = document.querySelector(".property-overview-slider");
//   const slideRightBtn = document.getElementById("slideRightDetails");
//   const slideLeftBtn = document.getElementById("slideLeftDetails");
//   const div = document.querySelector(".property-overview-slider .d-flex");

//   slideRightBtn.addEventListener("click", function () {
//     slideLeftBtn.classList.remove("hidden");
//     slider.scrollBy({
//       left: 180,
//       behavior: "smooth",
//     });
//     div.style.marginLeft = "40px";
//   });

//   slideLeftBtn.addEventListener("click", function () {
//     slider.scrollBy({
//       left: -180,
//       behavior: "smooth",
//     });
//   });
// });
document.addEventListener("DOMContentLoaded", function () {
  const slider = document.querySelector(".property-overview-slider");
  const slideRightBtn = document.getElementById("slideRightDetails");
  const slideLeftBtn = document.getElementById("slideLeftDetails");

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

// Upper-row height
document.addEventListener("DOMContentLoaded", function () {
  const upperRows = document.querySelectorAll(
    ".property-overview-slider .upper-row"
  );

  if (upperRows.length > 0) {
    const lastUpperRow = upperRows[upperRows.length - 1];
    const lastUpperRowHeight = lastUpperRow.offsetHeight;

    upperRows.forEach((row) => {
      row.style.height = lastUpperRowHeight + 20 + "px";
    });
  }
});
