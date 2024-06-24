import { waitForCompleteClick } from './helpers.js'

waitForCompleteClick()
  .then((data) => {
    console.log('Complete clicked')
  })
  .catch((error) => {
    console.log('Fail clicked')
  })
