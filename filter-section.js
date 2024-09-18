// Opening filter section
document.addEventListener("DOMContentLoaded", function () {
  const searchBtn = document.getElementById("pl-search-tag-div");
  const filterSection = document.querySelector(".filter-section-modal");
  const closeBtns = document.querySelectorAll(
    ".filter-section-modal .close-icon"
  );

  searchBtn.addEventListener("click", function () {
    filterSection.classList.remove("hide");
  });

  closeBtns.forEach(function (closeBtn) {
    closeBtn.addEventListener("click", function () {
      filterSection.classList.add("hide");
    });
  });
});

// Budget Range
document.addEventListener("DOMContentLoaded", function () {
  const minSlider = document.getElementById("minSlider");
  const maxSlider = document.getElementById("maxSlider");
  const minValueDisplay = document.getElementById("minValue");
  const maxValueDisplay = document.getElementById("maxValue");
  const filtersAppliedContainer = document.querySelector(".filters-applied");

  function convertToAmount(value) {
    if (value <= 100) {
      return `Rs.${value} Lakh`;
    } else {
      return `Rs.${(value / 100).toFixed(1)} Crore`;
    }
  }

  function updateSliderValues() {
    minValueDisplay.textContent = convertToAmount(minSlider.value);
    maxValueDisplay.textContent = convertToAmount(maxSlider.value);
    applyRangeFilter();
  }

  function applyRangeFilter() {
    const minAmount = convertToAmount(minSlider.value);
    const maxAmount = convertToAmount(maxSlider.value);
    const filterText = `${minAmount} - ${maxAmount}`;

    removeExistingFilter("range-filter");

    addFilterTag(filterText, null, "range-filter");
  }

  function addFilterTag(text, element, sectionClass) {
    if (sectionClass !== "property-type-section") {
      removeExistingFilter(sectionClass);
    }

    const filterTag = document.createElement("p");
    filterTag.textContent = text;
    filterTag.dataset.section = sectionClass;

    const span = document.createElement("span");
    const img = document.createElement("img");
    img.src = "./images/cross-blue.png";
    img.alt = "Remove filter";
    img.width = 20;
    span.appendChild(img);

    filterTag.appendChild(span);
    filtersAppliedContainer.appendChild(filterTag);

    span.addEventListener("click", function () {
      filterTag.remove();
      if (element && element.tagName === "INPUT") {
        element.checked = false;
      }
    });
  }

  function removeExistingFilter(sectionClass) {
    const existingTags = filtersAppliedContainer.querySelectorAll("p");
    existingTags.forEach((tag) => {
      if (tag.dataset.section === sectionClass) {
        tag.remove();
      }
    });
  }

  minSlider.addEventListener("input", function () {
    if (parseInt(minSlider.value) >= parseInt(maxSlider.value)) {
      minSlider.value = maxSlider.value - 1;
    }
    updateSliderValues();
  });

  maxSlider.addEventListener("input", function () {
    if (parseInt(maxSlider.value) <= parseInt(minSlider.value)) {
      maxSlider.value = parseInt(minSlider.value) + 1;
    }
    updateSliderValues();
  });

  updateSliderValues();
});

// Buy or Rent toggle
document.addEventListener("DOMContentLoaded", function () {
  const buyRentOptions = document.querySelectorAll(".buy-rent-section p");

  const categoryOptions = document.querySelectorAll(".category-section p");

  buyRentOptions.forEach((option) => {
    option.addEventListener("click", function () {
      buyRentOptions.forEach((opt) => opt.classList.remove("active"));

      this.classList.add("active");

      if (this.textContent === "Buy") {
        categoryOptions.forEach((cat) => {
          if (
            cat.textContent === "PG" ||
            cat.textContent === "Co-working space"
          ) {
            cat.classList.add("hide");
          } else {
            cat.classList.remove("hide");
          }
        });
      } else if (this.textContent === "Rent") {
        categoryOptions.forEach((cat) => {
          if (cat.textContent === "Plots") {
            cat.classList.add("hide");
          } else {
            cat.classList.remove("hide");
          }
        });
      }
    });
  });

  categoryOptions.forEach((category) => {
    category.addEventListener("click", function () {
      categoryOptions.forEach((cat) => cat.classList.remove("active"));

      this.classList.add("active");
    });
  });
});

// Change of Property Types
document.addEventListener("DOMContentLoaded", function () {
  const filtersAppliedContainer = document.querySelector(".filters-applied");
  const propertyTypes = {
    Residential: ["Apartment", "Duplex", "Villa", "Penthouse", "Studio"],
    Commercial: [
      "Ready to use office space",
      "Bare shell office space",
      "Shop",
      "Warehouse",
      "Showroom",
    ],
    Plots: ["Residential Plot", "Commercial Plot", "Agricultural Plots"],
    PG: ["Girls", "Boys", "Both"],
    "Co-working space": [],
  };

  const categoryOptions = document.querySelectorAll(".category-section p");
  const propertyTypeList = document.querySelector(".property-type-section ul");

  function updatePropertyTypes(category) {
    propertyTypeList.innerHTML = "";

    const types = propertyTypes[category];

    if (types.length === 0) {
      propertyTypeList.innerHTML = "<li>No property types available</li>";
      return;
    }

    types.forEach((type) => {
      const li = document.createElement("li");
      li.classList.add("d-flex", "align-items-center");
      li.innerHTML = `
        <input type="checkbox" name="property-type">
        <p>${type}</p>
      `;
      propertyTypeList.appendChild(li);
    });

    reapplyPropertyTypeListeners();
  }

  categoryOptions.forEach((category) => {
    category.addEventListener("click", function () {
      const selectedCategory = this.textContent.trim();
      updatePropertyTypes(selectedCategory);
    });
  });

  updatePropertyTypes("Residential");

  function reapplyPropertyTypeListeners() {
    const propertyTypeSection = document.querySelector(
      ".property-type-section"
    );
    if (propertyTypeSection) {
      const inputs = propertyTypeSection.querySelectorAll(
        "input[type='checkbox'], input[type='radio']"
      );

      inputs.forEach((input) => {
        input.removeEventListener("change", handleCheckboxChange);

        input.addEventListener("change", handleCheckboxChange);
      });
    }
  }

  // Function to handle checkbox changes
  function handleCheckboxChange(event) {
    const input = event.target;
    const labelText = input.nextElementSibling.textContent;
    const sectionClass = "property-type-section";

    if (input.checked) {
      addFilterTag(labelText, input, sectionClass);
    } else {
      removeFilterTag(labelText, sectionClass);
    }
  }

  function removeFilterTag(text, sectionClass) {
    const filtersAppliedContainer = document.querySelector(".filters-applied");
    const existingTags = filtersAppliedContainer.querySelectorAll(
      `p[data-section="${sectionClass}"]`
    );

    existingTags.forEach((tag) => {
      if (tag.textContent.includes(text)) {
        tag.remove();
      }
    });
  }

  function addFilterTag(text, element, sectionClass) {
    if (sectionClass !== "property-type-section") {
      removeExistingFilter(sectionClass);
    }

    const filterTag = document.createElement("p");
    filterTag.textContent = text;
    filterTag.dataset.section = sectionClass;

    const span = document.createElement("span");
    const img = document.createElement("img");
    img.src = "./images/cross-blue.png";
    img.alt = "Remove filter";
    img.width = 20;
    span.appendChild(img);

    filterTag.appendChild(span);
    filtersAppliedContainer.appendChild(filterTag);

    span.addEventListener("click", function () {
      filterTag.remove();
      if (element.tagName === "INPUT") {
        element.checked = false;
      } else if (element.tagName === "P") {
        element.classList.remove("active");
      }
    });
  }

  function removeExistingFilter(sectionClass) {
    const existingTags = filtersAppliedContainer.querySelectorAll("p");
    existingTags.forEach((tag) => {
      if (tag.dataset.section === sectionClass) {
        tag.remove();
      }
    });
  }
});

// Selecing Listing and Facing options
document.addEventListener("DOMContentLoaded", function () {
  function handleActiveClass(container) {
    const pElements = container.querySelectorAll("p");

    pElements.forEach((p) => {
      p.addEventListener("click", function () {
        pElements.forEach((pEl) => pEl.classList.remove("active"));

        this.classList.add("active");
      });
    });
  }

  const listedSection = document.querySelector(".listed-section");
  handleActiveClass(listedSection);

  const facingSection = document.querySelector(".facing-section");
  handleActiveClass(facingSection);
});

// Filters being applied
document.addEventListener("DOMContentLoaded", function () {
  const filtersAppliedContainer = document.querySelector(".filters-applied");

  function removeExistingFilter(sectionClass) {
    const existingTags = filtersAppliedContainer.querySelectorAll("p");
    existingTags.forEach((tag) => {
      if (tag.dataset.section === sectionClass) {
        tag.remove();
      }
    });
  }

  function addFilterTag(text, element, sectionClass) {
    if (sectionClass !== "property-type-section") {
      removeExistingFilter(sectionClass);
    }

    const filterTag = document.createElement("p");
    filterTag.textContent = text;
    filterTag.dataset.section = sectionClass;

    const span = document.createElement("span");
    const img = document.createElement("img");
    img.src = "./images/cross-blue.png";
    img.alt = "Remove filter";
    img.width = 20;
    span.appendChild(img);

    filterTag.appendChild(span);
    filtersAppliedContainer.appendChild(filterTag);

    span.addEventListener("click", function () {
      filterTag.remove();
      if (element.tagName === "INPUT") {
        element.checked = false;
      } else if (element.tagName === "P") {
        element.classList.remove("active");
      }
    });
  }

  function handleSectionClick(sectionClass) {
    const section = document.querySelector(`.${sectionClass}`);
    if (!section) {
      return;
    }

    const pElements = section.querySelectorAll("p");
    const inputs = section.querySelectorAll(
      "input[type='checkbox'], input[type='radio']"
    );

    pElements.forEach((p) => {
      p.addEventListener("click", function () {
        console.log("p clicked:", p.textContent);
        pElements.forEach((pEl) => pEl.classList.remove("active"));
        p.classList.add("active");
        addFilterTag(p.textContent, p, sectionClass);
      });
    });

    inputs.forEach((input) => {
      input.addEventListener("change", function () {
        console.log("Input changed:", input.nextElementSibling.textContent);
        const labelText = input.nextElementSibling.textContent;
        addFilterTag(labelText, input, sectionClass);
      });
    });
  }

  const searchIcon = document.querySelector(".search-engine img");
  const searchInput = document.querySelector(
    ".search-engine input[type='text']"
  );

  if (searchIcon && searchInput) {
    searchIcon.addEventListener("click", function () {
      const searchText = searchInput.value.trim();
      if (searchText) {
        addFilterTag(searchText, searchInput, "search-section");
        searchInput.value = "";
      }
    });
  }

  // function reapplyPropertyTypeListeners() {
  //   handleSectionClick("property-type-section");
  // }

  handleSectionClick("posession-section");
  handleSectionClick("listed-section");
  handleSectionClick("facing-section");
  handleSectionClick("property-age-section");

  // reapplyPropertyTypeListeners();

  const clearFilterBtn = document.getElementById("clear-filter");
  if (clearFilterBtn) {
    clearFilterBtn.addEventListener("click", function () {
      console.log("Clear filters clicked");
      filtersAppliedContainer.innerHTML = "";
      const inputs = document.querySelectorAll(
        "input[type='checkbox'], input[type='radio']"
      );
      inputs.forEach((input) => (input.checked = false));
      const activePs = document.querySelectorAll("p.active");
      activePs.forEach((p) => p.classList.remove("active"));
    });
  }
});

// Expanding advanced filters
document.addEventListener("DOMContentLoaded", function () {
  const advancedFilterBtn = document.querySelector(".advanced-filter-header");
  const advancedFilterSection = document.querySelector(
    ".advanced-filter-section"
  );
  const dropdown = document.querySelector(".advanced-filter-header svg");

  advancedFilterBtn.addEventListener("click", function () {
    advancedFilterSection.classList.toggle("show");
    dropdown.classList.toggle("rotate");
  });
});
