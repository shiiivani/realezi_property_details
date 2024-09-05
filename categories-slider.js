// Categories section slider
document.addEventListener("DOMContentLoaded", function () {
  const slider = document.querySelector(".categories-slider");
  const slideRightBtn = document.getElementById("slideRightBtn");
  const slideLeftBtn = document.getElementById("slideLeftBtn");

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

// Fixing Categories container on top of the screen
document.addEventListener("scroll", function () {
  const container = document.querySelector(".categories-container");
  const navbarHeight = document.querySelector(".navbar").offsetHeight;
  const stickyOffset = container.offsetTop - navbarHeight;
  const propertyDetailsCont = document.querySelector(".property-details-div");

  if (window.scrollY >= 656) {
    container.classList.add("fixed");
    propertyDetailsCont.style.marginTop = "90px";
  } else {
    container.classList.remove("fixed");
    propertyDetailsCont.style.marginTop = "30px";
  }
});

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
    { threshold: 0.5 }
  );

  document.querySelectorAll(".section").forEach((section) => {
    observer.observe(section);
  });
});
