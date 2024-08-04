document.addEventListener("DOMContentLoaded", function () {
  const readBtn = document.getElementById("read-btn");
  const commentContent = document.querySelector(".developer-comment");

  readBtn.addEventListener("click", function () {
    if (commentContent.classList.contains("expanded")) {
      commentContent.classList.remove("expanded");
      readBtn.textContent = "Read More";
    } else {
      commentContent.classList.add("expanded");
      readBtn.textContent = "Read Less";
    }
  });
});
