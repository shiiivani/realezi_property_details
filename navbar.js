//property-type filter
window.onload = () => {
  // let filters = {
  //   propertyType: [],
  //   bhkType: [],
  //   budgetMin: 0,
  //   budgetMax: 500000000,
  //   saleType: [],
  //   possessionStage: [],
  // };

  /* Flip chevron on dropdown open */
  //flip chevron on dropdown open

  //change property type on click
  // document.querySelectorAll(".property-types").forEach((item) => {
  //   item.addEventListener("click", (e) => {
  //     e.stopPropagation();
  //     item.classList.toggle("active-property-type");
  //     /* handle multi-select */
  //     if (item.classList.contains("active-property-type")) {
  //       filters.propertyType.push(e.target.getAttribute("data-property-type"));
  //     } else {
  //       filters.propertyType = filters.propertyType.filter(
  //         (type) => type !== e.target.getAttribute("data-property-type")
  //       );
  //     }
  //   });
  // });

  // document.querySelectorAll(".bhk-types").forEach((item) => {
  //   item.addEventListener("click", (e) => {
  //     e.stopPropagation();
  //     item.classList.toggle("active-bhk-type");
  //     /* handle multi-select */
  //     if (item.classList.contains("active-bhk-type")) {
  //       filters.bhkType.push(e.target.getAttribute("data-bhk-type"));
  //     } else {
  //       filters.bhkType = filters.bhkType.filter(
  //         (type) => type !== e.target.getAttribute("data-bhk-type")
  //       );
  //     }
  //   });
  // });

  /* handle searchbox input */
  let selectedTags = [];
  const searchInput = document.getElementById("pl-search-input");
  const searchDropDiv = document.querySelector("#pl-search-drop-div");
  const searchDropdownList = document.querySelector(".pl-search-drop");
  const tagDiv = document.querySelector("#pl-search-tag-div");
  const allTagDiv = document.querySelector(".pl-tag-list-all");
  const focusSearchInput = () => {
    searchInput.focus();
  };

  tagDiv.addEventListener("click", (e) => {
    e.stopPropagation();
    searchInput.value = "";
    focusSearchInput();
  });

  /* handle dropdiv visibility */
  searchInput.addEventListener("focus", () => {
    tagDiv.style.display = "none";
    searchDropDiv.style.display = "block";
  });

  searchInput.addEventListener("blur", (e) => {
    searchDropDiv.style.display = "none";
    tagDiv.style.display = "flex";
  });
  searchDropdownList.querySelectorAll("li").forEach((item) => {
    item.addEventListener("mousedown", (e) => {
      e.preventDefault();
      /* tagDiv.style.display = "flex"; */
      /* check if it exists on selectedTags, push if not else nothing */
      if (!selectedTags.includes(e.target.textContent)) {
        selectedTags.push(e.target.textContent);
        const mainlocation = document.getElementById("pl-tag-location");
        if (mainlocation) {
          tagDiv.removeChild(mainlocation);
        }
        if (
          tagDiv.childElementCount > 1 &&
          tagDiv.firstChild.textContent !== "Vadodara"
        ) {
          /* check if the element exists*/
          if (document.getElementById("pl-tag-counter")) {
            document.getElementById("pl-tag-counter").textContent =
              selectedTags.length - 1 + "+";
            const newTag = document.createElement("div");
            newTag.classList.add("pl-search-tag");
            newTag.classList.add("pl-counter-part");
            newTag.id = "alltag-id";
            newTag.textContent = e.target.textContent;
            document.querySelector(".pl-tag-list-all").appendChild(newTag);

            return;
          }

          const counterTag = document.createElement("div");
          counterTag.classList.add("pl-search-tag");
          counterTag.id = "pl-tag-counter";
          counterTag.textContent = selectedTags.length - 1 + "+";
          tagDiv.appendChild(counterTag);
          const newTag = document.createElement("div");
          newTag.classList.add("pl-search-tag");
          newTag.classList.add("pl-counter-part");
          newTag.id = "alltag-id";
          newTag.textContent = e.target.textContent;
          document.querySelector(".pl-tag-list-all").appendChild(newTag);
          return;
        }

        const newTag = document.createElement("div");
        newTag.classList.add("pl-search-tag");
        newTag.textContent = e.target.textContent;
        tagDiv.appendChild(newTag);
        let copyChild = tagDiv.children[1].cloneNode(true);
        copyChild.id = "alltag-id";
        document.querySelector(".pl-tag-list-all").appendChild(copyChild);
      }
    });
  });

  /* handle tag removal from allTagDiv */
  allTagDiv.addEventListener("mousedown", (event) => {
    event.preventDefault();
    allTagDiv.querySelectorAll("#alltag-id").forEach((item) => {
      item.addEventListener("click", (e) => {
        e.preventDefault();
        e.stopPropagation();
        allTagDiv.removeChild(item);
        selectedTags = selectedTags.filter(
          (tag) => tag !== e.target.textContent
        );
        /* remove from tagDiv */
        if (selectedTags.length === 0) {
          const newTag = document.createElement("div");
          newTag.classList.add("pl-search-tag");
          newTag.textContent = "Vadodara";
          newTag.id = "pl-tag-location";
          /* remove all  */
          tagDiv.querySelectorAll(".pl-search-tag").forEach((item) => {
            tagDiv.removeChild(item);
          });
          tagDiv.appendChild(newTag);
        }
        tagDiv.querySelectorAll(".pl-search-tag").forEach((item) => {
          /* case 1: if len of selectedTags >= 2 and selected tag context is true */
          if (
            selectedTags.length >= 2 &&
            e.target.textContent == item.textContent
          ) {
            /* remove the item and decrease the counter */
            tagDiv.removeChild(item);
            document.getElementById("pl-tag-counter").textContent =
              selectedTags.length - 1 + "+";
            /* add the reduced item as tag*/
            const newTag = document.createElement("div");
            newTag.classList.add("pl-search-tag");
            newTag.textContent = selectedTags[0];
            tagDiv.insertBefore(newTag, tagDiv.children[1]);
            return;
          }

          /* case 1.5: if len of selectedTags === 2 and selected tag context is false */
          if (
            selectedTags.length === 1 &&
            e.target.textContent !== item.textContent
          ) {
            const tagCounter = document.getElementById("pl-tag-counter");
            tagCounter.remove();
            /*  const newTag = document.createElement("div");
            newTag.classList.add("pl-search-tag");
            newTag.textContent = selectedTags[1];
            tagDiv.appendChild(newTag); */
            return;
          }

          /* case 2: if len of selectedTags >= 2 and selected tag context is false */
          if (
            selectedTags.length >= 2 &&
            e.target.textContent !== item.textContent
          ) {
            /* reduce counter */
            document.getElementById("pl-tag-counter").textContent =
              selectedTags.length - 1 + "+";
            return;
          }

          /* case 3: if len of selectedTags == 1 and selected tag context is true */
          if (
            selectedTags.length == 1 &&
            e.target.textContent == item.textContent
          ) {
            tagDiv.removeChild(item);
            const newTag = document.createElement("div");
            newTag.classList.add("pl-search-tag");
            newTag.textContent = selectedTags[0];
            tagDiv.appendChild(newTag);

            return;
          }
        });
      });
    });
  });

  /* handle tag removal */
  tagDiv.addEventListener("click", (e) => {
    e.stopPropagation();
    return;
  });

  /* if screen size is max-width 916px collapse pl-nav-2 */
  const plNav2 = document.querySelector("#pl-nav-2");
  const filterBtn = document.querySelector(".pl-mobile-filter-btn");
  if (window.innerWidth <= 916) {
    plNav2.classList.add("pl-nav-2-mob-hidden");
    filterBtn.addEventListener("click", () => {
      plNav2.classList.toggle("pl-nav-2-mob-hidden");
    });
  } else {
    plNav2.classList.remove("pl-nav-2-mob-hidden");
  }

  /* end */
};

// Buy or Rent Toggle Button
function toggleCanvasVisibility(selectedOption) {
  const pgCanvas = document.querySelector(".pg");
  const coworkingSpaceCanvas = document.querySelector(".coworkingspace");
  const plotCanvas = document.querySelector(".plot");

  if (selectedOption === "Buy") {
    pgCanvas.classList.add("hidden");
    coworkingSpaceCanvas.classList.add("hidden");
    plotCanvas.classList.remove("hidden");
  } else if (selectedOption === "Rent") {
    pgCanvas.classList.remove("hidden");
    coworkingSpaceCanvas.classList.remove("hidden");
    plotCanvas.classList.add("hidden");
  }
}

document.addEventListener("DOMContentLoaded", function () {
  const toggleButtons = document.querySelectorAll(".toggle-button p");
  let activeToggle = document.querySelector(".toggle-button p.active");
  let toggleSlideLine = document.createElement("div");

  toggleSlideLine.classList.add("toggle-slide-line");
  document.querySelector(".toggle-button").appendChild(toggleSlideLine);

  gsap.set(toggleSlideLine, {
    height: 29,
    position: "absolute",
    top: 4,
    zIndex: -1,
    transformOrigin: "left center",
    borderRadius: 5,
  });

  if (activeToggle) {
    gsap.set(toggleSlideLine, {
      width: activeToggle.offsetWidth,
      left: activeToggle.offsetLeft,
      backgroundColor: "#ffffff",
    });
  }

  toggleButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      toggleButtons.forEach(function (p) {
        p.classList.remove("active");
      });
      this.classList.add("active");

      updateActiveToggle(this);

      const selectedOption = this.textContent.trim();
      toggleCanvasVisibility(selectedOption);
    });
  });

  function updateActiveToggle(newActiveToggle) {
    if (activeToggle !== newActiveToggle) {
      activeToggle.classList.remove("active");
      newActiveToggle.classList.add("active");

      const tl = gsap.timeline();

      const activeToggleRect = activeToggle.getBoundingClientRect();
      const newToggleRect = newActiveToggle.getBoundingClientRect();
      const direction =
        newToggleRect.left < activeToggleRect.left ? "left" : "right";

      tl.to(toggleSlideLine, {
        duration: 0.3,
        width: newActiveToggle.offsetWidth,
        left: newActiveToggle.offsetLeft,
        ease: "power2.out",
      })
        .to(
          toggleSlideLine,
          {
            duration: 0.1,
            x: direction === "left" ? "-3px" : "+3px",
            ease: "bounce.out",
          },
          "-=0.1"
        )
        .to(toggleSlideLine, {
          duration: 0.1,
          x: direction === "left" ? "+3px" : "-3px",
          ease: "bounce.out",
        })
        .to(toggleSlideLine, {
          duration: 0.2,
          x: "0px",
          ease: "power2.inOut",
        });

      activeToggle = newActiveToggle;
    }
  }

  const initialOption = document
    .querySelector(".toggle-button p.active")
    .textContent.trim();
  toggleCanvasVisibility(initialOption);
});

// Selecting Property Type
document.addEventListener("DOMContentLoaded", function () {
  const listItems = document.querySelectorAll(".nav-filter ul li");

  listItems.forEach((item) => {
    item.addEventListener("click", function () {
      listItems.forEach((li) => li.classList.remove("active"));

      item.classList.add("active");
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const locationBtn = document.querySelector("nav .dropdown");
  const navFilter = document.querySelector("nav .nav-filter");
  const dropdown = document.querySelector(".dropdown svg");
  const nav = document.querySelector("nav");

  locationBtn.addEventListener("click", function () {
    // Toggle the 'active' class
    navFilter.classList.toggle("active");
    nav.classList.toggle("active");

    // Rotate the dropdown icon based on the active state
    if (navFilter.classList.contains("active")) {
      dropdown.style.transform = "rotate(180deg)";
    } else {
      dropdown.style.transform = "rotate(0deg)";
    }
  });
});
