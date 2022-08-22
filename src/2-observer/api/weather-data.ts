import { Observer } from "../interfaces/observer";
import { Subject } from "../interfaces/subject";
import { WeatherAPI } from "../interfaces/wheater-api";

export class WeatherDataAPI implements Subject, WeatherAPI {
  public temperature!: number
  public humidity!: number
  public preasure!: number
  private observerList: Observer[] = []

  getWeatherInformation(): void {
    this.humidity = Math.floor(Math.random() * 100)
    this.preasure = Math.floor(Math.random() * 100) 
    this.temperature = Math.floor(Math.random() * 100) 
    this.notifyObserver()
  }
  registerObserver(observer: Observer): void {
    this.observerList.push(observer)
  }
  removeObserver(observer: Observer): void {
    this.observerList.splice(this.observerList.indexOf(observer), 1)
  }
  notifyObserver(): void {
    for (const observer of this.observerList) {
      observer.update()
    }
  }

  getTemperature() {
    return this.temperature
  }
  getPressure() {
    return this.preasure
  }
  getHumidity() {
    return this.humidity
  }

}