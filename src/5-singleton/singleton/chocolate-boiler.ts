export class Chocolateboiler {
  private empty: boolean
  private boiled: boolean
  private static uniqueInstance: Chocolateboiler

  private constructor() {
    this.empty = true
    this.boiled = false
  }
  public static getInstance(): Chocolateboiler {
    if (this.uniqueInstance == null) this.uniqueInstance = new Chocolateboiler()
    return this.uniqueInstance
  }
  public fill() {
    if (this.isEmpty()) {
      this.empty = false;
      this.boiled = false
      //fill the boiler with a milk/chocolato mixture
    }
  }

  public drain() {
    if (!this.isEmpty && this.isBoiled()) {
      // drain the boiled milk and chocolate
      this.empty = true
    }
  }
  public boil() {
    if (!this.isEmpty() && !this.isBoiled) {
      this.boiled = true
      // bring the contents to a boil
    }
  }
  public isEmpty(): boolean {
    return this.empty
  }
  public isBoiled(): boolean {
    return this.boiled
  }

}