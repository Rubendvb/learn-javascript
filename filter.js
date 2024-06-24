const numbers = [9, 5, 14, 2, 1, 10, 11, 12, 13, 15]

const numbersAbove10 = numbers.filter(function (number) {
  return number > 10
})

console.log(numbersAbove10)
