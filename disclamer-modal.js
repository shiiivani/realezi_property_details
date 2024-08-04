document.addEventListener("DOMContentLoaded", function () {
  const disclamerModal = document.querySelector(".disclamer-modal-container");
  const disclamerBtn = document.getElementById("close-disclamer");

  disclamerBtn.addEventListener("click", function () {
    disclamerModal.classList.remove("active");
  });
});
