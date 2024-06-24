class Tasks {
  constructor(all) {
    this._all = all
  }

  get all() {
    return this._all.join(', ')
  }
}

const tasks = new Tasks(['Laundry', 'Clean kitchen'])
console.log(tasks.all) // "Laundry, Clean kitchen"
