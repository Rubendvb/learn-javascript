class User {
  constructor(age) {
    this._age = age
  }

  get age() {
    console.log('age getter')
    return this._age
  }

  set age(value) {
    console.log('age setter')
    this._age = Number.parseInt(value, 10)
  }
}

const user = new User('30')
console.log(user.age)
user.age = '20'
console.log(user.age)
