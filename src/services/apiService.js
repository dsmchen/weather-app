export async function getWeatherData(location) {
  try {
    const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?unitGroup=metric&key=MSYZLNK9EFFY75WBFFZMMSZBL&contentType=json`;
    const response = await fetch(url);
    if (!response.ok) {
      return console.error("Response status:", response.status);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}

export function processWeatherData(data) {
  console.log(data);
  const appData = {
    currentConditions: {
      conditions: data.currentConditions.conditions,
      datetime: data.currentConditions.datetime,
      temp: data.currentConditions.temp,
    },
    todayConditions: {
      conditions: data.days[0].conditions,
      datetime: data.days[0].datetime,
      description: data.days[0].description,
      temp: data.days[0].temp,
      tempmax: data.days[0].tempmax,
      tempmin: data.days[0].tempmin,
    },
  };
  console.log(appData);
}
