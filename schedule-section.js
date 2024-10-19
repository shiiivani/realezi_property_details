// Right Side Section Sticky
// document.addEventListener("scroll", function () {
//   if (window.innerWidth > 1200) {
//     const container = document.querySelector(".property-details-div-right");
//     const navbarHeight = document.querySelector("nav").offsetHeight;
//     const categoriesHeight = document.querySelector(
//       ".categories-container"
//     ).offsetHeight;
//     const disclamer = document.querySelector(".disclaimer-container.pb-3");
//     const containerHeight = container.offsetHeight;
//     const disclamerTop = disclamer.getBoundingClientRect().top + window.scrollY;

//     const threshold = 152;
//     const offset = 140;

//     if (
//       window.scrollY >= 610 &&
//       window.scrollY + containerHeight < disclamerTop - offset
//     ) {
//       container.classList.add("fixed");
//       container.classList.remove("absolute");
//       container.style.top = `${navbarHeight + categoriesHeight + 10}px`;
//     } else if (window.scrollY + containerHeight >= disclamerTop - threshold) {
//       container.classList.remove("fixed");
//       container.classList.add("absolute");
//       container.style.top = "initial";
//     } else {
//       container.classList.remove("fixed");
//       container.classList.remove("absolute");
//       container.style.top = "initial";
//     }
//   }
// });

// Generating current days and dates
// document.addEventListener("DOMContentLoaded", function () {
//   const dateContainerSliders = document.querySelectorAll(
//     ".date-container-slider"
//   );

//   const today = new Date();
//   const currentYear = today.getFullYear();
//   const currentMonth = today.getMonth();

//   function getDayName(date) {
//     const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
//     return days[date.getDay()];
//   }

//   dateContainerSliders.forEach(function (dateContainerSlider) {
//     dateContainerSlider.innerHTML = "";

//     for (let i = 0; i < 3; i++) {
//       const futureDate = new Date(
//         currentYear,
//         currentMonth,
//         today.getDate() + i
//       );
//       const dayName = i === 0 ? "Today" : getDayName(futureDate);

//       const dateDiv = document.createElement("div");
//       dateDiv.classList.add("date");

//       const dayP = document.createElement("p");
//       dayP.textContent = dayName;

//       const dateP = document.createElement("p");
//       dateP.textContent = futureDate.getDate().toString().padStart(2, "0");

//       dateDiv.appendChild(dayP);
//       dateDiv.appendChild(dateP);

//       dateContainerSlider.appendChild(dateDiv);
//     }

//     // Add the last "View Calendar" div
//     const viewCalendarDiv = document.createElement("div");
//     viewCalendarDiv.classList.add("date");

//     const viewCalendarP = document.createElement("p");
//     viewCalendarP.textContent = "View Calendar";
//     viewCalendarP.classList.add("view-calendar");
//     viewCalendarP.setAttribute("colspan", "2");

//     viewCalendarDiv.appendChild(viewCalendarP);
//     dateContainerSlider.appendChild(viewCalendarDiv);
//   });
// });

// // Dates Slider
// document.addEventListener("DOMContentLoaded", function () {
//   const sliders = document.querySelectorAll(".date-container-slider");

//   sliders.forEach(function (slider) {
//     const slideRightBtn = slider.parentElement.querySelector("#slideRightDate");
//     const slideLeftBtn = slider.parentElement.querySelector("#slideLeftDate");

//     slideRightBtn.addEventListener("click", function () {
//       slideLeftBtn.classList.remove("hidden");
//       slider.scrollBy({
//         left: 100,
//         behavior: "smooth",
//       });
//     });

//     slideLeftBtn.addEventListener("click", function () {
//       slider.scrollBy({
//         left: -150,
//         behavior: "smooth",
//       });
//     });
//   });
// });

// Right Side Calendar
// document.addEventListener("DOMContentLoaded", function () {
//   const calendars = document.querySelectorAll(".calendar-container");

//   calendars.forEach(function (calendar) {
//     const monthSelect = calendar.querySelector(".month-select");
//     const yearSelect = calendar.querySelector(".year-select");
//     const calendarGrid = calendar.querySelector(".calendar-grid");
//     const prevMonthBtn = calendar.querySelector(".prev-month");
//     const nextMonthBtn = calendar.querySelector(".next-month");

//     const months = [
//       "January",
//       "February",
//       "March",
//       "April",
//       "May",
//       "June",
//       "July",
//       "August",
//       "September",
//       "October",
//       "November",
//       "December",
//     ];

//     const today = new Date();
//     let currentMonth = today.getMonth();
//     let currentYear = today.getFullYear();

//     // Calculate 30 days from today
//     const endDate = new Date();
//     endDate.setDate(today.getDate() + 30);

//     function populateDropdowns() {
//       monthSelect.innerHTML = "";
//       yearSelect.innerHTML = "";

//       const date = today.getDate();
//       const monthOptions =
//         date > 15 ? [currentMonth, currentMonth + 1] : [currentMonth];

//       monthOptions.forEach((month) => {
//         const monthIndex = month % 12;
//         monthSelect.innerHTML += `<option value="${monthIndex}" ${
//           monthIndex === currentMonth ? "selected" : ""
//         }>${months[monthIndex]}</option>`;
//       });

//       const yearOptions =
//         today.getMonth() === 11 && date > 15
//           ? [currentYear, currentYear + 1]
//           : [currentYear];
//       yearOptions.forEach((year) => {
//         yearSelect.innerHTML += `<option value="${year}" ${
//           year === currentYear ? "selected" : ""
//         }>${year}</option>`;
//       });

//       updateButtonVisibility();
//     }

//     // Generate calendar grid for the selected month and year
//     function generateCalendar(month, year) {
//       calendarGrid.innerHTML = "";
//       const firstDay = new Date(year, month, 1).getDay();
//       const lastDate = new Date(year, month + 1, 0).getDate();
//       const prevLastDate = new Date(year, month, 0).getDate();

//       // Previous month's days
//       for (let i = firstDay - 1; i >= 0; i--) {
//         const date = prevLastDate - i;
//         calendarGrid.innerHTML += `<div class="date inactive-date">${date}</div>`;
//       }

//       // Current month's days
//       for (let i = 1; i <= lastDate; i++) {
//         const currentDate = new Date(year, month, i);
//         const isInRange = currentDate >= today && currentDate <= endDate;

//         const isToday = currentDate.toDateString() === today.toDateString();

//         // Add inactive class for dates outside the 30-day range
//         calendarGrid.innerHTML += `<button class="date" ${
//           isInRange || isToday ? "" : "disabled"
//         }>${i}</button>`;
//       }

//       // Next month's days
//       const remainingDays = (7 - ((firstDay + lastDate) % 7)) % 7;
//       for (let i = 1; i <= remainingDays; i++) {
//         calendarGrid.innerHTML += `<div class="date inactive-date">${i}</div>`;
//       }

//       // Update button visibility based on the new month and year
//       updateButtonVisibility();
//     }

//     // Function to update visibility or enable/disable state of next/prev buttons
//     function updateButtonVisibility() {
//       const selectedMonth = parseInt(monthSelect.value);
//       const selectedYear = parseInt(yearSelect.value);

//       // Disable previous button if we're at the current month and year
//       if (
//         selectedMonth === today.getMonth() &&
//         selectedYear === today.getFullYear()
//       ) {
//         prevMonthBtn.disabled = true;
//       } else {
//         prevMonthBtn.disabled = false;
//       }
//     }

//     monthSelect.addEventListener("change", (e) => {
//       currentMonth = parseInt(e.target.value);
//       generateCalendar(currentMonth, currentYear);
//     });

//     yearSelect.addEventListener("change", (e) => {
//       currentYear = parseInt(e.target.value);
//       generateCalendar(currentMonth, currentYear);
//     });

//     prevMonthBtn.addEventListener("click", () => {
//       if (currentMonth === 0) {
//         currentMonth = 11;
//         currentYear--;
//       } else {
//         currentMonth--;
//       }
//       monthSelect.value = currentMonth;
//       yearSelect.value = currentYear;
//       generateCalendar(currentMonth, currentYear);
//     });

//     nextMonthBtn.addEventListener("click", () => {
//       if (currentMonth === 11) {
//         currentMonth = 0;
//         currentYear++;
//       } else {
//         currentMonth++;
//       }
//       monthSelect.value = currentMonth;
//       yearSelect.value = currentYear;
//       generateCalendar(currentMonth, currentYear);
//     });

//     populateDropdowns();
//     generateCalendar(currentMonth, currentYear);
//   });
// });

// View Calendar
// document.addEventListener("DOMContentLoaded", function () {
//   const schedulingContainers = document.querySelectorAll(
//     ".scheduling-container"
//   );

//   schedulingContainers.forEach(function (container) {
//     const dateCont = container.querySelector(".date-container");
//     const calendarCont = container.querySelector(".calendar-container");
//     const viewCalendarBtn = container.querySelector(
//       ".date-container-slider .date .view-calendar"
//     );
//     const upperSection = container.querySelector(".scheduling-container-upper");

//     // Function to show the calendar and hide the upper section
//     const openCalendar = function () {
//       if (upperSection) {
//         upperSection.classList.add("d-none");
//         upperSection.classList.remove("d-flex");
//       }
//       calendarCont.classList.add("active");
//       dateCont.classList.remove("active");
//     };

//     // Add both click and touch events
//     viewCalendarBtn.addEventListener("click", openCalendar);
//     viewCalendarBtn.addEventListener("touchstart", openCalendar);
//   });
// });

// Selecting Date and Time
document.addEventListener("DOMContentLoaded", function () {
  const schedulingContainers = document.querySelectorAll(
    ".scheduling-container"
  );

  schedulingContainers.forEach((container) => {
    const modalButtons = container.querySelectorAll(".visit-btn");
    const dateInput = container.querySelector("input[type=date]");
    const times = container.querySelectorAll(".time");

    function checkActiveState() {
      const activeDate = dateInput && dateInput.value !== "";
      const activeTime = container.querySelector(".time.active");

      if (activeDate && activeTime) {
        modalButtons.forEach((button) => button.classList.add("active"));
      } else {
        modalButtons.forEach((button) => button.classList.remove("active"));
      }
    }

    if (dateInput) {
      dateInput.addEventListener("change", checkActiveState);
    }

    times.forEach((time) => {
      time.addEventListener("click", function () {
        times.forEach((t) => t.classList.remove("active"));

        time.classList.add("active");

        checkActiveState();
      });
    });
  });
});

// Opening Schedule form Modal
document.addEventListener("DOMContentLoaded", function () {
  const modalButtons = document.querySelectorAll(
    "#open-schedule-form-modal-container"
  );
  const modal = document.querySelector(".schedule-form-modal-container");
  const form = document.querySelector(".schedule-form-modal-container .modals");
  const closeIcon = document.querySelector(
    ".schedule-form-modal-container .close-icon"
  );

  function showModal() {
    const activeBtn = document.querySelector(
      ".property-details-div .scheduling-container .visit-btn.active"
    );

    if (activeBtn) {
      modal.style.display = "flex";
      modal.offsetHeight;
      form.classList.add("active");
      modal.classList.add("show");
      modal.classList.remove("hide");
    }
  }

  function hideModal() {
    form.classList.remove("active");
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
    if (!form.contains(e.target)) {
      hideModal();
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const modalButtons = document.querySelectorAll(
    "#open-schedule-calendar-modal-container"
  );
  const modal = document.querySelector(".schedule-calendar-modal-container");
  const form = document.querySelector(
    ".schedule-calendar-modal-container .modals"
  );
  const calendar = document.querySelector(
    ".schedule-calendar-modal-container .scheduling-container"
  );
  const scheduleVisitBtn = document.getElementById("open-schedule-form");
  const closeIcon = document.querySelector(
    ".schedule-calendar-modal-container .close-icon"
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

  function showForm() {
    const activeTime = document.querySelector(
      ".schedule-calendar-modal-container .scheduling-container .blue-btn:last-child.active"
    );
    if (activeTime) {
      form.classList.add("active");
      calendar.classList.add("hidden");
    }
  }

  modalButtons.forEach((button) => {
    button.addEventListener("click", function () {
      showModal();
    });
  });

  closeIcon.addEventListener("click", function () {
    hideModal();
  });

  scheduleVisitBtn.addEventListener("click", function () {
    showForm();
  });

  modal.addEventListener("click", function (e) {
    if (!calendar.contains(e.target) && !form.contains(e.target)) {
      hideModal();
    }
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
