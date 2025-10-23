export function showLoadingSpinner() {
  const overlay = document.querySelector(".overlay");
  overlay.style.display = "flex";
  overlay.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden"; // Disable scrolling when overlay is displayed
}

export function hideLoadingSpinner() {
  const overlay = document.querySelector(".overlay");
  overlay.style.display = "none";
  overlay.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "auto"; // Enable scrolling after hiding overlay
}
