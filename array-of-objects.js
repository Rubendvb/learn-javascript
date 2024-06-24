const tweets = [
  {
    id: 1080777336298049537,
    message: 'Hello Twitter 👋',
    created_at: '2020-01-03 11:46:00',
    author: {
      id: 109215315,
      firstName: 'Jad',
      lastName: 'Joubran',
      handle: 'JoubranJad',
    },
  },
  {
    id: 1080777336298195435,
    message: 'How do you keep track of your notes?',
    created_at: '2021-02-19 15:32:00',
    author: {
      id: 109216891,
      firstName: 'Sam',
      lastName: 'Green',
      handle: 'SamGreen',
    },
  },
]

tweets.forEach((tweet) => {
  console.log(tweet.author)
})
