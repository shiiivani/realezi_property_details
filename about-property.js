document.addEventListener("DOMContentLoaded", function () {
  const contentContainer = document.getElementById("aboutPropertyContent");
  const toggleButton = document.getElementById("show-more-property-details");
  const toggleButtonText = toggleButton.querySelector("p");
  const arrowIcon = toggleButton.querySelector("img");

  toggleButton.addEventListener("click", function () {
    contentContainer.classList.toggle("expanded");
    arrowIcon.classList.toggle("rotate");

    if (contentContainer.classList.contains("expanded")) {
      toggleButtonText.textContent = "Show less about project";
    } else {
      toggleButtonText.textContent = "Show more about project";
    }
  });
});
