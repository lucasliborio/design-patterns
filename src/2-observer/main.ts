import { WeatherDataAPI } from "./api/weather-data";
import { CurrentCondition } from "./displays/current-condition";

const weatherDataAPI = new WeatherDataAPI()
const currentCondition = new CurrentCondition(weatherDataAPI)
weatherDataAPI.getWeatherInformation()
currentCondition.display()