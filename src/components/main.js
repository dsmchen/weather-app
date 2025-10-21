import { getWeatherData, processWeatherData } from "../services/apiService";

export async function initDisplay() {
  const data = await getWeatherData("london");
  const appData = processWeatherData(data);
  displayResults(appData);
}

export function displayResults(results) {
  const locationEl = document.querySelector("h1 .location");
  const tempEl = document.querySelector("h1 .temp");
  const dateEl = document.querySelector("h2.date");
  const descEl = document.querySelector("p.desc");
  const highEl = document.querySelector("li.high span");
  const lowEl = document.querySelector("li.low span");
  const timeEl = document.querySelector("h2.time");
  const tempEl2 = document.querySelector("h3.temp");
  const conditionsEl = document.querySelector("p.conditions");

  locationEl.textContent = results.address;
  tempEl.textContent = `${results.currentConditions.temp}°C`;
  dateEl.textContent = results.todayConditions.datetime;
  descEl.textContent = results.todayConditions.description;
  highEl.textContent = `${results.todayConditions.tempmax}°C`;
  lowEl.textContent = `${results.todayConditions.tempmin}°C`;
  timeEl.textContent = results.currentConditions.datetime.slice(0, 5);
  tempEl2.textContent = `${results.currentConditions.temp}°C`;
  conditionsEl.textContent = results.currentConditions.conditions;
}
