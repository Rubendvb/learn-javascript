const h1 = document.querySelector('h1')

console.log(h1.parentElement)
console.log(h1.closest('.main'))

const positions = document.querySelector('#job-positions')
positions.insertAdjacentHTML(
  'beforeend',
  '<div class="position">2015-2020</div>'
)

positions.insertAdjacentHTML(
  'afterbegin',
  '<div class="position">2005-2009</div>'
)

const apps = ['Calculator', 'Phone', 'Messages']
const list = document.querySelector('#apps-list')

apps.forEach((app) => {
  list.insertAdjacentHTML('beforeend', `<li>${app}</li>`)
})

const img = document.createElement('img')
img.setAttribute('src', 'https://picsum.photos/200')
img.classList.add('photo')

positions.appendChild(img)

console.log(img)

const button = document.querySelector('#app-button')

button.addEventListener('click', () => {
  console.log('app clicked')
})

const btnDetails = document.querySelector('#event-details')

btnDetails.addEventListener('click', (event) => {
  console.log(event)
})

const name = document.querySelector('#name')

name.addEventListener('focus', () => {
  console.log('user focused inside the name')
})

name.addEventListener('blur', () => {
  console.log('user blur inside')
})

const countries = document.querySelector('#countries')

countries.addEventListener('change', () => {
  console.log(countries.value)
})

document.addEventListener('keydown', (event) => {
  console.log('down', event.key)
})

document.addEventListener('keyup', (event) => {
  console.log('up', event.key)
})

const sayHello = () => {
  console.log('sayHello')
}

const buttonSay = document.querySelector('#say')
buttonSay.addEventListener('click', sayHello)
