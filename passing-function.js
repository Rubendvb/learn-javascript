const registerUser = (user, callback) => {
  if (!user.id) {
    return false
  }

  console.log('registered user')
  callback()
}

// Sample usage
const sendWelcomeEmail = () => {
  console.log('Sending welcome email')
}

registerUser({ id: 1, name: 'John' }, sendWelcomeEmail)
registerUser({ id: 2, name: 'Vanessa' }, () => {
  console.log('this also works!')
})
