// Opening and Closing Brochure Modal
document.addEventListener("DOMContentLoaded", function () {
  const modalButtons = document.querySelectorAll(
    ".open-brochure-modal-container"
  );
  const modal = document.querySelector(".brochure-modal-container");
  const modalContent = document.querySelector(
    ".brochure-modal-container .modals"
  );
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

  modal.addEventListener("click", function (e) {
    if (!modalContent.contains(e.target)) {
      hideModal();
    }
  });
});

// Otp sent message
document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".modals form").forEach((form) => {
    const countryCodeSelect = form.querySelector("#country-code");
    const phoneNumberCont = form.querySelector(".phone-number-container");
    const phoneNumberInput = form.querySelector("#phone-number");
    const sendOtpBtn = form.querySelector("#send-otp-btn");
    const otpSentMessage = form.querySelector("#otp-sent-message");
    const otpCont = form.querySelector(".otp-container");
    const otpInput = otpCont.querySelector(".input-group input");
    const otpVerification = otpCont.querySelector(
      ".input-group .otp-verification"
    );

    sendOtpBtn.addEventListener("click", function (event) {
      event.preventDefault();
      const countryCode = countryCodeSelect.value;
      const phoneNumber = phoneNumberInput.value;

      if (phoneNumber) {
        otpSentMessage.textContent = `We have sent the OTP to ${countryCode} ${phoneNumber}.`;
        otpSentMessage.classList.add("active");
        phoneNumberCont.classList.add("sent");
        otpCont.style.display = "flex";
      } else {
        alert("Please enter a valid phone number.");
      }
    });

    otpInput.addEventListener("input", function () {
      if (otpInput.value.length === 4) {
        otpVerification.style.display = "block";
      } else {
        otpVerification.style.display = "none";
      }
    });
  });
});

// Checking Validity of Form
document.addEventListener("DOMContentLoaded", function () {
  const forms = document.querySelectorAll(".modals form");

  forms.forEach(function (form) {
    const submitButton = form.querySelector(".submit-btn");
    const checkBox = form.querySelector("#checkboxId");

    function checkFormValidity() {
      const isValid = form.checkValidity();

      if (isValid && checkBox.checked) {
        submitButton.disabled = false;
        submitButton.classList.add("active");
      } else {
        submitButton.disabled = true;
        submitButton.classList.remove("active");
      }
    }

    form.addEventListener("input", checkFormValidity);

    checkBox.addEventListener("change", checkFormValidity);
  });
});

// Confirmation Modal Popup and form reset
document.addEventListener("DOMContentLoaded", function () {
  const submitButtons = document.querySelectorAll(".submit-btn");
  const modals = document.querySelectorAll(".modals");
  const confirmationPopupModals = document.querySelectorAll(
    ".confirmation-popup-modal"
  );
  const closeIcons = document.querySelectorAll(".modal-container .close-icon");

  submitButtons.forEach((button, index) => {
    button.addEventListener("click", function (event) {
      event.preventDefault();

      modals[index].style.display = "none";
      const form = modals[index].querySelector("form");
      if (form) form.reset();

      const confirmationModal = confirmationPopupModals[index];
      confirmationModal.style.display = "block";

      const video = confirmationModal.querySelector("video");
      video.play();

      setTimeout(function () {
        video.classList.add("shrink");
        confirmationModal.classList.add("show");
      }, 3500);
    });
  });

  // closeIcons.forEach((closeIcon, index) => {
  //   closeIcon.addEventListener("click", function () {
  //     const confirmationModal = confirmationPopupModals[index];
  // const video = confirmationModal.querySelector("video");

  // confirmationPopupModals[index].style.display = "none";
  // modals[index].style.display = "block";
  // confirmationModal.classList.remove("show");
  // video.classList.remove("shrink");
  // });
  // });
});
