const grades = [10, 15, 5]

const sum = grades.reduce(function (total, current) {
  return total * current
}, 1)

console.log(sum)
