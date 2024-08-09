// Right Side Section Sticky
document.addEventListener("scroll", function () {
  if (window.innerWidth > 1200) {
    const container = document.querySelector(".property-details-div-right");
    const navbarHeight = document.querySelector(".navbar").offsetHeight;
    const categoriesHeight = document.querySelector(
      ".categories-container"
    ).offsetHeight;
    const footer = document.querySelector("footer");

    const stickyOffset =
      container.offsetTop - (navbarHeight + categoriesHeight);
    const containerHeight = container.offsetHeight;
    const footerTop = footer.getBoundingClientRect().top + window.scrollY;

    // Check if the container should be fixed
    if (window.scrollY >= 665 && window.scrollY + containerHeight < footerTop) {
      container.classList.add("fixed");
      container.classList.remove("absolute");
      container.style.top = `${navbarHeight + categoriesHeight}px`;
    } else if (window.scrollY + containerHeight >= footerTop) {
      // When the container hits the footer
      container.classList.remove("fixed");
      container.classList.add("absolute");
      container.style.top = "initial";
      // container.style.bottom = `${footerTop - containerHeight}px`;
    } else {
      container.classList.remove("fixed");
      container.classList.remove("absolute");
      container.style.top = "initial";
    }
  }
});

// Generating current days and dates
document.addEventListener("DOMContentLoaded", function () {
  const dateContainerSlider = document.querySelector(".date-container-slider");

  // Get the current date
  const today = new Date();
  const currentYear = today.getFullYear();
  const currentMonth = today.getMonth();

  // Get the number of days in the current month
  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();

  // Function to get day name
  function getDayName(date) {
    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    return days[date.getDay()];
  }

  // Clear existing dates
  dateContainerSlider.innerHTML = "";

  // Generate days and dates starting from today
  for (let day = today.getDate(); day <= daysInMonth; day++) {
    const date = new Date(currentYear, currentMonth, day);
    const dayName = day === today.getDate() ? "Today" : getDayName(date);

    const dateDiv = document.createElement("div");
    dateDiv.classList.add("date");

    const dayP = document.createElement("p");
    dayP.textContent = dayName;

    const dateP = document.createElement("p");
    dateP.textContent = day.toString().padStart(2, "0");

    dateDiv.appendChild(dayP);
    dateDiv.appendChild(dateP);

    dateContainerSlider.appendChild(dateDiv);
  }

  // Add the last "View Calendar" div
  const viewCalendarDiv = document.createElement("div");
  viewCalendarDiv.classList.add("date");

  const viewCalendarP = document.createElement("p");
  viewCalendarP.textContent = "View Calendar";
  viewCalendarP.classList.add("view-calendar");
  viewCalendarP.setAttribute("colspan", "2");

  viewCalendarDiv.appendChild(viewCalendarP);
  dateContainerSlider.appendChild(viewCalendarDiv);
});

// Dates Slider
document.addEventListener("DOMContentLoaded", function () {
  const slider = document.querySelector(".date-container-slider");
  const slideRightBtn = document.getElementById("slideRightDate");
  const slideLeftBtn = document.getElementById("slideLeftDate");

  slideRightBtn.addEventListener("click", function () {
    slideLeftBtn.classList.remove("hidden");
    slider.scrollBy({
      left: 100,
      behavior: "smooth",
    });
  });

  slideLeftBtn.addEventListener("click", function () {
    slider.scrollBy({
      left: -150,
      behavior: "smooth",
    });
  });
});

// Right Side Calendar
document.addEventListener("DOMContentLoaded", function () {
  const monthSelect = document.getElementById("month-select");
  const yearSelect = document.getElementById("year-select");
  const calendarGrid = document.getElementById("calendar-grid");
  const prevMonthBtn = document.getElementById("prev-month");
  const nextMonthBtn = document.getElementById("next-month");

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const today = new Date();
  let currentMonth = today.getMonth();
  let currentYear = today.getFullYear();

  // Populate month and year dropdowns
  function populateDropdowns() {
    monthSelect.innerHTML = months
      .map(
        (month, index) =>
          `<option value="${index}" ${
            index === currentMonth ? "selected" : ""
          }>${month}</option>`
      )
      .join("");

    const yearRange = 10;
    yearSelect.innerHTML = Array.from({ length: yearRange * 2 + 1 }, (_, i) => {
      const year = currentYear - yearRange + i;
      return `<option value="${year}" ${
        year === currentYear ? "selected" : ""
      }>${year}</option>`;
    }).join("");
  }

  // Generate calendar grid
  function generateCalendar(month, year) {
    calendarGrid.innerHTML = "";
    const firstDay = new Date(year, month, 1).getDay();
    const lastDate = new Date(year, month + 1, 0).getDate();
    const prevLastDate = new Date(year, month, 0).getDate();

    // Previous month's days
    for (let i = firstDay - 1; i >= 0; i--) {
      const date = prevLastDate - i;
      calendarGrid.innerHTML += `<div class="date inactive-date">${date}</div>`;
    }

    // Current month's days
    for (let i = 1; i <= lastDate; i++) {
      const isToday =
        i === today.getDate() &&
        month === today.getMonth() &&
        year === today.getFullYear();
      calendarGrid.innerHTML += `<div class="date ${
        isToday ? "today" : ""
      }">${i}</div>`;
    }

    // Next month's days
    const remainingDays = (7 - ((firstDay + lastDate) % 7)) % 7;
    for (let i = 1; i <= remainingDays; i++) {
      calendarGrid.innerHTML += `<div class="date inactive-date">${i}</div>`;
    }
  }

  // Event listeners
  monthSelect.addEventListener("change", (e) => {
    currentMonth = parseInt(e.target.value);
    generateCalendar(currentMonth, currentYear);
  });

  yearSelect.addEventListener("change", (e) => {
    currentYear = parseInt(e.target.value);
    generateCalendar(currentMonth, currentYear);
  });

  prevMonthBtn.addEventListener("click", () => {
    if (currentMonth === 0) {
      currentMonth = 11;
      currentYear--;
    } else {
      currentMonth--;
    }
    monthSelect.value = currentMonth;
    yearSelect.value = currentYear;
    generateCalendar(currentMonth, currentYear);
  });

  nextMonthBtn.addEventListener("click", () => {
    if (currentMonth === 11) {
      currentMonth = 0;
      currentYear++;
    } else {
      currentMonth++;
    }
    monthSelect.value = currentMonth;
    yearSelect.value = currentYear;
    generateCalendar(currentMonth, currentYear);
  });

  // Initialize calendar
  populateDropdowns();
  generateCalendar(currentMonth, currentYear);
});

// Opening Calendar
document.addEventListener("DOMContentLoaded", function () {
  const dateCont = document.querySelector(
    ".scheduling-container .date-container"
  );
  const calendarCont = document.querySelector(
    ".scheduling-container .calendar-container"
  );
  const viewCalendarBtn = document.querySelector(
    ".date-container-slider .date .view-calendar"
  );

  viewCalendarBtn.addEventListener("click", function () {
    calendarCont.classList.add("active");
    dateCont.classList.remove("active");
  });
});

// Opening Schedule Form Modal
// document.addEventListener("DOMContentLoaded", function () {
// Get both modal buttons
const modalButtons = document.querySelectorAll(
  "#open-schedule-form-modal-container, #another-button-id"
);

const modal = document.querySelector(".schedule-form-modal-container");
const closeIcon = document.querySelector(
  ".schedule-form-modal-container .close-icon"
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

// Add event listener to each button to show the modal
modalButtons.forEach((button) => {
  button.addEventListener("click", function () {
    showModal();
  });
});

// Event listener for closing the modal
closeIcon.addEventListener("click", function () {
  hideModal();
});

// Schedule confirmation Modal
document.addEventListener("DOMContentLoaded", function () {
  const modalButton = document.getElementById("event-scheduled");
  const modal = document.querySelector(
    ".schedule-confirmation-modal-container"
  );
  const scheduleFormModal = document.querySelector(
    ".schedule-form-modal-container"
  );
  const closeIcon = document.querySelector(
    ".schedule-confirmation-modal-container .close-icon"
  );
  function showModal() {
    modal.style.display = "flex";
    modal.offsetHeight;
    modal.classList.add("show");
    scheduleFormModal.classList.add("hide");
    scheduleFormModal.classList.remove("show");
  }

  function hideModal() {
    modal.classList.add("hide");
    modal.classList.remove("show");

    setTimeout(() => {
      modal.style.display = "none";
      scheduleFormModal.style.display = "none";
    }, 500);
  }

  modalButton.addEventListener("click", function () {
    showModal();
  });

  // Event listener for closing the modal
  closeIcon.addEventListener("click", function () {
    hideModal();
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector(".schedule-form-modal form");
  const submitButton = document.getElementById("event-scheduled");

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
