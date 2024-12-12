// document.addEventListener("DOMContentLoaded", function () {
//   const slider = document.querySelector(".property-overview-slider");
//   const slideRightBtn = document.getElementById("slideRightDetails");
//   const slideLeftBtn = document.getElementById("slideLeftDetails");

//   slideRightBtn.addEventListener("click", function () {
//     slideLeftBtn.classList.remove("hidden");
//     slider.scrollBy({
//       left: 100,
//       behavior: "smooth",
//     });
//   });

//   slideLeftBtn.addEventListener("click", function () {
//     slider.scrollBy({
//       left: -150,
//       behavior: "smooth",
//     });
//   });
// });

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

// Expand property overview
document.addEventListener("DOMContentLoaded", function () {
  const propertyOverview = document.querySelector(
    ".property-overview-content .property-overview-slider"
  );
  const viewMoreBtn = document.querySelector(".view-more-property-overview");
  const text = document.querySelector(".view-more-property-overview p");
  const arrow = document.querySelector(".view-more-property-overview img");

  viewMoreBtn.addEventListener("click", function () {
    propertyOverview.classList.toggle("expand");
    arrow.classList.toggle("rotate");

    if (propertyOverview.classList.contains("expand")) {
      console.log("working");
      text.textContent = "Close this Information";
    } else {
      text.textContent = "View more Information";
    }
  });
});
