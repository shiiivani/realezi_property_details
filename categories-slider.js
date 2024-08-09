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

document.addEventListener("scroll", function () {
  const container = document.querySelector(".categories-container");
  const navbarHeight = document.querySelector(".navbar").offsetHeight;
  const stickyOffset = container.offsetTop - navbarHeight;

  if (window.scrollY >= 656) {
    console.log(window.scrollY);
    container.classList.add("fixed");
  } else {
    container.classList.remove("fixed");
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const categories = document.querySelectorAll(".category");

  // Function to remove active class from all categories
  function removeActiveClass() {
    categories.forEach((category) => category.classList.remove("active"));
  }

  // Function to add active class to the current category
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
    { threshold: 0.5 } // Adjust threshold as needed
  );

  // Observe each section
  document.querySelectorAll(".section").forEach((section) => {
    observer.observe(section);
  });
});
