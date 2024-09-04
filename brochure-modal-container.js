document.addEventListener("DOMContentLoaded", function () {
  const modalButtons = document.querySelectorAll(
    ".open-brochure-modal-container"
  );
  const modal = document.querySelector(".brochure-modal-container");
  const modalContent = document.querySelector(".brochure-modal");
  const closeIcon = document.querySelector(
    ".brochure-modal-container .close-icon"
  );
  function showModal() {
    modal.style.display = "flex";
    modal.offsetHeight;
    modal.classList.add("show");
    modal.classList.remove("hide");
  }

  function hideModal() {
    modal.classList.add("hide");
    modal.classList.remove("show");

    setTimeout(() => {
      modal.style.display = "none";
    }, 500);
  }

  modalButtons.forEach((button) => {
    button.addEventListener("click", function () {
      showModal();
    });
  });

  closeIcon.addEventListener("click", function () {
    hideModal();
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector(".brochure-modal form");
  const countryCodeSelect = document.getElementById("country-code");
  const phoneNumberCont = document.querySelector(".phone-number-container");
  const phoneNumberInput = document.getElementById("phone-number");
  const sendOtpBtn = document.getElementById("send-otp-btn");
  const otpSentMessage = document.getElementById("otp-sent-message");

  sendOtpBtn.addEventListener("click", function (event) {
    event.preventDefault();
    const countryCode = countryCodeSelect.value;
    const phoneNumber = phoneNumberInput.value;

    if (phoneNumber) {
      otpSentMessage.textContent = `We have sent the OTP to ${countryCode} ${phoneNumber}.`;
      otpSentMessage.classList.add("active");
      phoneNumberCont.classList.add("sent");

      phoneNumberInput.style.marginBottom = "0";
    } else {
      alert("Please enter a valid phone number.");
    }
  });
});

// Checking validity of forms
document.addEventListener("DOMContentLoaded", function () {
  const forms = document.querySelectorAll(".modals form");

  forms.forEach(function (form) {
    const submitButton = form.querySelector(".submit-btn");
    const checkBox = document.querySelector(".modals #checkboxId");

    form.addEventListener("input", function () {
      const isValid = form.checkValidity();

      if (isValid && checkBox.checked) {
        submitButton.disabled = false;
        submitButton.classList.add("active");
      } else {
        submitButton.disabled = true;
        submitButton.classList.remove("active");
      }
    });
  });
});

// Confirmation Modal Popup and form reset
document.addEventListener("DOMContentLoaded", function () {
  const submitButton = document.querySelectorAll(".submit-btn");
  const modals = document.querySelectorAll(".modals");
  const confirmationPopupModals = document.querySelectorAll(
    ".confirmation-popup-modal"
  );
  const closeIcons = document.querySelectorAll(".modal-container .close-icon");

  submitButton.forEach((button, index) => {
    button.addEventListener("click", function (event) {
      event.preventDefault();

      modals[index].style.display = "none";
      const form = modals[index].querySelector("form");
      if (form) form.reset();

      const confirmationModal = confirmationPopupModals[index];
      confirmationModal.style.display = "block";

      const video = confirmationModal.querySelector("video");
      video.play();

      video.onended = function () {
        video.classList.add("shrink");

        confirmationModal.classList.add("show");
      };
    });
  });

  closeIcons.forEach((closeIcon, index) => {
    closeIcon.addEventListener("click", function () {
      // Hide the confirmation modal
      confirmationPopupModals[index].style.display = "none";

      // Show the original modals container
      modals[index].style.display = "block";
    });
  });
});
