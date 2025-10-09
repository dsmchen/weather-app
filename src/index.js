import "./style.css";
import { getWeatherData } from "./services/apiService";

window.addEventListener("load", () => {
  getWeatherData("london");
});
