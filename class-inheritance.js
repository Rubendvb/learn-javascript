class Employee {
  constructor(firstName, lastName, props) {
    this.firstName = firstName
    this.lastName = lastName
  }

  getFullName() {
    return `${this.firstName} ${this.lastName}`
  }

  getInitials() {
    return `${this.firstName[0]}. ${this.lastName[0]}.`
  }
}

class Manager extends Employee {
  getFullName() {
    return `Manager: ${super.getFullName()}`
  }

  sendPerformanceReview() {
    console.log(`Sent performance review for current quarter`)
  }
}

const manager = new Manager('Sam', 'Green')
manager.sendPerformanceReview()
console.log(manager.getFullName())
console.log(manager.getInitials())
