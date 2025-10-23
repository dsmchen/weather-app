import { getWeatherData, processWeatherData } from "../services/apiService";
import { displayResults } from "./main";
import image from "../assets/logo/sun_with_face.png";

(function () {
  const h1El = document.querySelector("h1");

  const logo = new Image();
  logo.src = image;

  h1El.prepend(logo);
})();

export function search() {
  const searchInput = document.getElementById("location-search");
  const submitBtn = document.querySelector("form button");

  async function handleSubmit(e) {
    e.preventDefault();
    const data = await getWeatherData(searchInput.value);
    const appData = processWeatherData(data);
    displayResults(appData);
  }

  submitBtn.addEventListener("click", handleSubmit);
}
