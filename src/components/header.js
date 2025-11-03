import { showLoadingSpinner, hideLoadingSpinner } from "./loading";
import { getWeatherData, processWeatherData } from "../services/apiService";
import { displayResults } from "./main";
import image from "../assets/logo/sun_with_face.png";
import { hideError, showError } from "./error";

(function () {
  // Header logo

  const h1El = document.querySelector("h1");

  const logo = new Image();
  logo.src = image;

  h1El.prepend(logo);

  // Unit selector

  const unitSelectorEl = document.querySelector(".unit-selector");
  const unitSelectorList = document.querySelector(".unit-selector ul");
  const celciusEl = document.getElementById("celcius");
  const fahrenheitEl = document.getElementById("fahrenheit");
  const iconBtn = document.querySelector(".icon-button");

  function handleClickUnitSelector() {
    const displayStyle = window.getComputedStyle(unitSelectorList).display;
    if (displayStyle === "none") {
      unitSelectorList.style.display = "flex";
      iconBtn.classList.remove("down");
      iconBtn.classList.add("up");
    } else {
      unitSelectorList.style.display = "none";
      iconBtn.classList.remove("up");
      iconBtn.classList.add("down");
    }
  }

  async function handleClickUnit(e) {
    const targetUnit = e.target.id;
    let unitGroup;
    if (targetUnit === "celcius") {
      fahrenheitEl.classList.remove("active");
      celciusEl.classList.add("active");
      unitGroup = "metric";
      iconBtn.textContent = "°C";
    } else {
      celciusEl.classList.remove("active");
      fahrenheitEl.classList.add("active");
      unitGroup = "us";
      iconBtn.textContent = "°F";
    }

    const locationText = document.querySelector(".location").textContent;

    showLoadingSpinner();
    const data = await getWeatherData(locationText, unitGroup);
    if (data?.address) {
      const appData = processWeatherData(data);
      displayResults(appData);
      hideError();
    } else {
      showError(data?.status);
    }
    hideLoadingSpinner();
  }

  unitSelectorEl.addEventListener("click", handleClickUnitSelector);
  celciusEl.addEventListener("click", handleClickUnit);
  fahrenheitEl.addEventListener("click", handleClickUnit);
})();

export function search() {
  const searchInput = document.getElementById("location-search");
  const submitBtn = document.querySelector("form button");
  const iconBtn = document.querySelector(".icon-button");

  async function handleSubmit(e) {
    e.preventDefault();
    showLoadingSpinner();

    if (searchInput.value === "") {
      const locationEl = document.querySelector("h2 .location");
      searchInput.value = locationEl.textContent;
    }

    const unitGroup = iconBtn.textContent === "°C" ? "metric" : "us";
    const data = await getWeatherData(searchInput.value, unitGroup);

    if (data?.address) {
      const appData = processWeatherData(data);
      displayResults(appData);
      hideError();
    } else {
      showError(data?.status);
    }

    searchInput.value = "";
    hideLoadingSpinner();
  }

  submitBtn.addEventListener("click", handleSubmit);
}
