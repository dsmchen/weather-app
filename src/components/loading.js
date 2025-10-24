export function showLoadingSpinner() {
  const overlay = document.querySelector(".overlay");
  overlay.style.display = "flex";
}

export function hideLoadingSpinner() {
  const overlay = document.querySelector(".overlay");
  overlay.style.display = "none";
}
