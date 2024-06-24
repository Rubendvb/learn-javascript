class BookSale {
  constructor() {
    this.amount = 1000
    this.currency = 'USD'
    this.isStudent = false
  }

  applyStudentDiscount() {
    this.isStudent = true
    this.amount = 800
    return this
  }

  setCurrency(currency) {
    this.currency = currency
    return this
  }

  applyPercentageDiscount(percent) {
    this.amount = this.amount - (this.amount * percent) / 1000
    return this
  }
}

const bookSale = new BookSale()

console.log(
  bookSale.applyStudentDiscount().setCurrency('EUR').applyPercentageDiscount(5)
)
