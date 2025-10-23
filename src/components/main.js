import { getWeatherData, processWeatherData } from "../services/apiService";
import { hideLoadingSpinner } from "./loading";
import { format } from "date-fns";

export async function initDisplay() {
  const data = await getWeatherData("london");
  const appData = processWeatherData(data);
  displayResults(appData);
  hideLoadingSpinner();
}

export function displayResults(results) {
  // Text

  const locationEl = document.querySelector("h2 .location");
  const tempEl = document.querySelector("h2 .temp");
  const dateEl = document.querySelector("h2.date");
  const descEl = document.querySelector("p.desc");
  const highEl = document.querySelector("li.high span");
  const lowEl = document.querySelector("li.low span");
  const timeEl = document.querySelector("h2.time");
  const tempEl2 = document.querySelector("h3.temp");
  const conditionsEl = document.querySelector("p.conditions");

  locationEl.textContent = results.address;
  tempEl.textContent = `${results.currentConditions.temp}°C`;
  dateEl.textContent = format(
    new Date(results.todayConditions.datetime),
    "dd MMM",
  );
  descEl.textContent = results.todayConditions.description;
  highEl.textContent = `${results.todayConditions.tempmax}°C`;
  lowEl.textContent = `${results.todayConditions.tempmin}°C`;
  timeEl.textContent = results.currentConditions.datetime.slice(0, 5);
  tempEl2.textContent = `${results.currentConditions.temp}°C`;
  conditionsEl.textContent = results.currentConditions.conditions;

  // Icons

  const currentIcon = results.currentConditions.icon;
  const todayIcon = results.todayConditions.icon;
  const headerImg = document.querySelector(".header-current-weather img");
  const todayImg = document.querySelector(".today-weather img");
  const currentImg = document.querySelector(".current-weather img");

  async function setIcon(iconName, img) {
    const module = await import(`../assets/weatherIcons/${iconName}.svg`);
    img.src = module.default;
    img.alt = iconName;
  }

  setIcon(currentIcon, headerImg);
  setIcon(todayIcon, todayImg);
  setIcon(currentIcon, currentImg);
}
