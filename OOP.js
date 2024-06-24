class User {
  constructor(firstName, lastName, prefix, age) {
    this.firstName = firstName
    this.lastName = lastName
    this.prefix = prefix
    this.age = age
  }

  getFullName() {
    return `${this.prefix}. ${this.firstName} ${this.lastName}`
  }

  canVote() {
    return this.age >= 18
  }
}

const user1 = new User('Sam', 'Green', 'Mr', 20)
console.log(user1.getFullName())
console.log(user1.canVote())

const user2 = new User('Alex', 'Green', 'Mr', 17)
console.log(user2.getFullName())
console.log(user2.canVote())
