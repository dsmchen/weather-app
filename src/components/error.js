export function showError(status) {
  // Text

  let h2Text;
  let pText;
  const h2El = document.querySelector(".error h2");
  const pEl = document.querySelector(".error p");

  if (status === 400) {
    h2Text = "No results found.";
    pText = "Try searching for a city or postal code.";
  } else {
    h2Text = "Sorry, something went wrong.";
    pText = "Please try again later.";
  }

  h2El.textContent = h2Text;
  pEl.textContent = pText;

  // Display

  const errorEl = document.querySelector(".error");
  const gridEl = document.querySelector(".grid");

  errorEl.style.display = "block";
  gridEl.style.display = "none";
}

export function hideError() {
  const errorEl = document.querySelector(".error");
  const gridEl = document.querySelector(".grid");

  errorEl.style.display = "none";
  gridEl.style.display = "grid";
}
