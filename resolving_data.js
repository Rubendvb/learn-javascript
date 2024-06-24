const wait = (milliseconds) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const seconds = milliseconds / 1_000
      resolve(seconds)
    }, milliseconds)
  })
}

wait(2_000).then((seconds) => {
  console.log(`${seconds} seconds`)
})
