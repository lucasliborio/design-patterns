import { WeatherDataAPI } from "../api/weather-data";
import { Display } from "../interfaces/display";
import { Observer } from "../interfaces/observer";



export class CurrentCondition implements Display, Observer {
  public temperature!: number
  public humidity!: number
  public preasure!: number
  constructor(private api: WeatherDataAPI) {
    api.registerObserver(this)
  }
  update(): void {
    this.preasure = this.api.getPressure()
    this.temperature = this.api.getTemperature()
    this.humidity = this.api.getHumidity()
    
    this.display()
  }
  display(): void {
    console.group("PRESURE", "TEMPERATURE", "HUMIDITY")
    console.log(this.preasure, this.temperature, this.humidity)
    console.groupEnd()
  }
  
}