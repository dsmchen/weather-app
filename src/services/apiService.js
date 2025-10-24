import { showError, hideError } from "../components/error";
import { hideLoadingSpinner } from "../components/loading";

export async function getWeatherData(location) {
  let response;

  try {
    const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}/today?unitGroup=metric&key=MSYZLNK9EFFY75WBFFZMMSZBL&contentType=json`;
    response = await fetch(url);
  } catch (error) {
    console.error(error);
  }

  if (response?.ok) {
    hideError();
    const data = await response.json();
    return data;
  } else {
    console.error(`HTTP Response Code: ${response?.status}`);
    showError(response?.status);
    hideLoadingSpinner();
  }
}

export function processWeatherData(data) {
  const appData = {
    address: data.resolvedAddress,
    currentConditions: {
      conditions: data.currentConditions?.conditions,
      datetime: data.currentConditions?.datetime,
      icon: data.currentConditions?.icon,
      temp: data.currentConditions?.temp,
    },
    todayConditions: {
      datetime: data.days[0]?.datetime,
      description: data.days[0]?.description,
      icon: data.days[0]?.icon,
      tempmax: data.days[0]?.tempmax,
      tempmin: data.days[0]?.tempmin,
    },
  };
  return appData;
}
