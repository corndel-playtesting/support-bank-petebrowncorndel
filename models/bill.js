export class Bill {
  constructor(total) {
    this.total = total
  }

  split(people) {
    return this.total / people
  }
}
