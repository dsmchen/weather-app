export async function getWeatherData(location) {
  try {
    const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?unitGroup=metric&key=MSYZLNK9EFFY75WBFFZMMSZBL&contentType=json`;
    const response = await fetch(url);
    if (!response.ok) {
      return console.error("Response status:", response.status);
    }
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}
