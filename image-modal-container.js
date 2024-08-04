document.addEventListener("DOMContentLoaded", function () {
  const propertyImagesDiv = document.querySelector(".property-images-div");
  const carouselItems =
    propertyImagesDiv.querySelectorAll(".carousel-item img");
  const imageModal = document.getElementById("imageModal");
  const modalImage = document.getElementById("modalImage");
  const closeModal = document.getElementById("closeModal");

  // Function to show modal
  function showModal(event) {
    const imgSrc = event.target.src;
    modalImage.src = imgSrc;
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
});

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
  const modalImage = document.getElementById("modalImage");
  const closeModal = document.querySelector(
    ".image-video-modal-container .close-icon"
  );

  // Function to show modal
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
});
