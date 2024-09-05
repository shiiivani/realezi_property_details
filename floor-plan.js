// Selecting specific apartment in Floor Plan Selection
document.addEventListener("DOMContentLoaded", function () {
  const categories = document.querySelectorAll(
    ".floor-plan-properties-categories"
  );
  const containers = document.querySelectorAll(".floor-plan");
  const squareFootContainers = document.querySelectorAll(
    ".square-foot-container p"
  );

  categories.forEach((category) => {
    category.addEventListener("click", function () {
      categories.forEach((cat) => cat.classList.remove("active"));
      containers.forEach((container) => container.classList.remove("active"));

      const targetId = category.getAttribute("data-target");
      category.classList.add("active");
      document.getElementById(targetId).classList.add("active");
    });
  });

  // Selecting square foot for specific apartment
  squareFootContainers.forEach((squareFoot) => {
    squareFoot.addEventListener("click", function () {
      const parentContainer = squareFoot.closest(".floor-plan");
      const squareFoots = parentContainer.querySelectorAll(
        ".square-foot-container p"
      );
      const properties = parentContainer.querySelectorAll(
        ".square-foot-container-property"
      );

      squareFoots.forEach((sq) => sq.classList.remove("active"));
      properties.forEach((prop) => prop.classList.remove("active"));

      const targetId = squareFoot.getAttribute("data-target");
      squareFoot.classList.add("active");
      document.getElementById(targetId).classList.add("active");
    });
  });
});
