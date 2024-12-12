// Categories section slider
// document.addEventListener("DOMContentLoaded", function () {
//   const slider = document.querySelector(".categories-slider");
//   const slideRightBtn = document.getElementById("slideRightBtn");
//   const slideLeftBtn = document.getElementById("slideLeftBtn");

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

// Fixing Categories container on top of the screen
// document.addEventListener("scroll", function () {
//   const container = document.querySelector(".categories-container");
//   const navbarHeight = document.querySelector("nav").offsetHeight;
//   const stickyOffset = container.offsetTop - navbarHeight;
//   const propertyDetailsCont = document.querySelector(".property-details-div");

//   if (window.scrollY >= 585) {
//     container.classList.add("fixed");
//     propertyDetailsCont.style.marginTop = "90px";
//   } else {
//     container.classList.remove("fixed");
//     propertyDetailsCont.style.marginTop = "30px";
//   }
// });

// // Second navbar categories becoming active when particular section shows o screen
document.addEventListener("DOMContentLoaded", function () {
  const categories = document.querySelectorAll(".category");

  function removeActiveClass() {
    categories.forEach((category) => category.classList.remove("active"));
  }

  function addActiveClass(targetId) {
    removeActiveClass();
    const activeCategory = document.querySelector(
      `.category[data-target="${targetId}"]`
    );
    if (activeCategory) {
      activeCategory.classList.add("active");
    }
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          addActiveClass(entry.target.id);
        }
      });
    },
    { threshold: 0.7 }
  );

  document.querySelectorAll(".section").forEach((section) => {
    observer.observe(section);
  });
});

// Slide to that section when clicked on the second navbar
document.addEventListener("DOMContentLoaded", function () {
  const categories = document.querySelectorAll(".category");

  categories.forEach((category) => {
    category.addEventListener("click", function () {
      const targetId = this.getAttribute("data-target");
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth" });
      }
    });
  });
});
