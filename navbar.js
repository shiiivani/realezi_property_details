document.querySelectorAll(".dropdown-location").forEach((item) => {
  item.addEventListener("click", (event) => {
    document.querySelector("#location-selection").textContent =
      event.target.textContent;
  });
});
document.querySelectorAll("#propertyTypeDropdown").forEach((item) => {
  item.addEventListener("click", (event) => {
    event.stopPropagation();
  });
});
//handle property type dropdown selection for selecting multiple options
document.querySelectorAll(".dropdown-property-type").forEach((item) => {
  item.addEventListener("click", (event) => {
    if (event.target.classList.contains("option-is-selected")) {
      event.target.classList.remove("option-is-selected");
    } else {
      event.target.classList.add("option-is-selected");
    }
  });
});
