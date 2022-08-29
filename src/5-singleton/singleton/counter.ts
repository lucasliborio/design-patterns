export class Counter {
  private static counterInstance: Counter
  counter: number
  private constructor() {
    this.counter = 0
  }
  static getInstance() {
    if (this.counterInstance == null) {
      this.counterInstance = new Counter()
    }
    return this.counterInstance
  }

  public add() {
    this.counter = this.counter + 1
  }
}