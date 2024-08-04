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

  // Event listener for closing the modal
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

      // Remove margin-bottom from phone number input
      phoneNumberInput.style.marginBottom = "0";
    } else {
      alert("Please enter a valid phone number.");
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector(".brochure-modal form");
  const submitButton = document.querySelector(".submit-btn");

  form.addEventListener("input", function () {
    const isValid = form.checkValidity();
    submitButton.disabled = !isValid;
    if (isValid) {
      submitButton.classList.add("active");
    } else {
      submitButton.classList.remove("active");
    }
  });
});
