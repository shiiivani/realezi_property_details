//property-type filter
window.onload = () => {
  let filters = {
    propertyType: [],
    bhkType: [],
    budgetMin: 0,
    budgetMax: 500000000,
    saleType: [],
    possessionStage: [],
  };

  /* Flip chevron on dropdown open */
  //flip chevron on dropdown open
  document.querySelectorAll(".dropdown").forEach((item) => {
    item.addEventListener("shown.bs.dropdown", (event) => {
      event.target.querySelector("svg").style.transform = "rotate(180deg)";
    });
    item.addEventListener("hidden.bs.dropdown", (event) => {
      event.target.querySelector("svg").style.transform = "rotate(0deg)";
    });
  });
  //change property type on click
  document.querySelectorAll(".property-types").forEach((item) => {
    item.addEventListener("click", (e) => {
      e.stopPropagation();
      item.classList.toggle("active-property-type");
      /* handle multi-select */
      if (item.classList.contains("active-property-type")) {
        filters.propertyType.push(e.target.getAttribute("data-property-type"));
      } else {
        filters.propertyType = filters.propertyType.filter(
          (type) => type !== e.target.getAttribute("data-property-type")
        );
      }
    });
  });

  document.querySelectorAll(".bhk-types").forEach((item) => {
    item.addEventListener("click", (e) => {
      e.stopPropagation();
      item.classList.toggle("active-bhk-type");
      /* handle multi-select */
      if (item.classList.contains("active-bhk-type")) {
        filters.bhkType.push(e.target.getAttribute("data-bhk-type"));
      } else {
        filters.bhkType = filters.bhkType.filter(
          (type) => type !== e.target.getAttribute("data-bhk-type")
        );
      }
    });
  });

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
