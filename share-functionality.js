function shareToFacebook() {
  const url = encodeURIComponent(window.location.href);
  window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}`, "_blank");
}

function shareToWhatsApp() {
  const url = encodeURIComponent(window.location.href);
  window.open(`https://wa.me/?text=${url}`, "_blank");
}

function shareToEmail() {
  const subject = encodeURIComponent("Check out this article!");
  const body = encodeURIComponent(
    `I found this article interesting: ${window.location.href}`
  );
  window.location.href = `mailto:?subject=${subject}&body=${body}`;
}

function copyLink() {
  const url = window.location.href;
  navigator.clipboard
    .writeText(url)
    .then(() => alert("Link copied to clipboard!"))
    .catch((err) => console.error("Failed to copy text: ", err));
}
