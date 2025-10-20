import { getWeatherData, processWeatherData } from "../services/apiService";

export function search() {
  const searchInput = document.getElementById("location-search");
  const submitBtn = document.querySelector("form button");

  async function handleSubmit(e) {
    e.preventDefault();
    const data = await getWeatherData(searchInput.value);
    processWeatherData(data);
  }

  submitBtn.addEventListener("click", handleSubmit);
}
