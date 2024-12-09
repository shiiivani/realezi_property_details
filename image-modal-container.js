// Opening and closing Image modal
document.addEventListener("DOMContentLoaded", function () {
  const propertyImagesDiv = document.querySelector(".property-images-div");
  const carouselItems =
    propertyImagesDiv.querySelectorAll(".carousel-item img");
  const carouselInner = propertyImagesDiv.querySelector(".carousel-inner");
  const imageModal = document.getElementById("imageModal");
  const modalHeader = imageModal.querySelector(".image-modal-header");
  const modalHeaderInner = imageModal.querySelector(
    ".image-modal-header-inner"
  );
  const price = imageModal.querySelector(".price");
  const modalCategories = imageModal.querySelector(".image-categories");
  const modalContent = imageModal.querySelector(".image-modal");
  const modalImage = document.getElementById("modalImage");
  const closeModal = document.getElementById("closeModal");
  const additionalButton = document.querySelector(
    ".property-photos-video-container div"
  );

  function showModal(event) {
    // const imgSrc = event.target.src;
    // modalImage.src = imgSrc;
    imageModal.classList.add("active");
    document.body.style.overflow = "hidden";
  }

  function hideModal() {
    imageModal.classList.remove("active");
    document.body.style.overflow = "auto";
  }

  carouselItems.forEach((item) => {
    item.addEventListener("click", showModal);
  });

  additionalButton.addEventListener("click", showModal);

  closeModal.addEventListener("click", hideModal);

  imageModal.addEventListener("click", function (e) {
    console.log(e.target);
    if (
      e.target === modalContent ||
      e.target === modalHeader ||
      e.target === modalCategories ||
      e.target === carouselInner ||
      e.target === modalHeaderInner ||
      e.target === price
    ) {
      hideModal();
    }
  });
});

// Images slider
document.addEventListener("DOMContentLoaded", function () {
  const carousels = document.querySelectorAll(".image-modal .carousel");

  carousels.forEach((carousel) => {
    const progressBar = carousel.querySelector(".carousel-progress-bar");
    const currentSlideElem = carousel.querySelector(".current-slide");
    const totalSlidesElem = carousel.querySelector(".total-slides");
    const totalSlides = carousel.querySelectorAll(
      ".carousel-inner .carousel-item"
    ).length;

    totalSlidesElem.textContent = totalSlides;

    progressBar.style.width = `${(1 / totalSlides) * 100}%`;
    currentSlideElem.textContent = 1;

    carousel.addEventListener("slide.bs.carousel", function (event) {
      const currentSlide = event.to + 1;
      const progressPercentage = (currentSlide / totalSlides) * 100;

      progressBar.style.width = `${progressPercentage}%`;
      currentSlideElem.textContent = currentSlide;
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const propertyImagesDiv = document.querySelector(
    ".property-photos-video-container"
  );
  const carouselItems = propertyImagesDiv.querySelectorAll(
    ".image-video-container"
  );
  const imageModal = document.getElementById("imageVideoModal");
  const closeModal = document.querySelector(
    ".image-video-modal-container .close-icon"
  );
  const modalHeader = imageModal.querySelector(".image-modal-header");
  const modalCategories = imageModal.querySelector(".image-categories");
  const modalContent = imageModal.querySelector(".image-modal");

  function showModal() {
    imageModal.classList.add("active");
    document.body.style.overflow = "hidden";
  }

  function hideModal() {
    imageModal.classList.remove("active");
    document.body.style.overflow = "auto";
  }

  carouselItems.forEach((item) => {
    item.addEventListener("click", showModal);
  });

  closeModal.addEventListener("click", hideModal);

  imageModal.addEventListener("click", function (e) {
    if (
      e.target === modalContent ||
      e.target === modalHeader ||
      e.target === modalCategories
    ) {
      hideModal();
    }
  });
});

// Selecting categories in image slider
document.addEventListener("DOMContentLoaded", function () {
  const categories = document.querySelectorAll(".category");
  const carousel = document.getElementById("carouselExampleCaptions2");
  const carouselItems = document.querySelectorAll(
    ".image-modal-container .carousel-inner .carousel-item"
  );

  categories.forEach((category) => {
    category.addEventListener("click", function () {
      categories.forEach((cat) => cat.classList.remove("active"));
      category.classList.add("active");
      const target = this.getAttribute("data-target");
      let targetIndex = 0;

      carouselItems.forEach((item, index) => {
        if (item.getAttribute("data-name") === target) {
          targetIndex = index;
        }
      });

      const bsCarousel =
        bootstrap.Carousel.getInstance(carousel) ||
        new bootstrap.Carousel(carousel);
      bsCarousel.to(targetIndex);
    });
  });
});
