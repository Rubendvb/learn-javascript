const getName = (name) => {
  return name ?? 'N/A'
}

console.log(getName('Sam'))
console.log(getName(undefined))
console.log(getName(null))
