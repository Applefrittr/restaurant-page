import {aboutPage} from './splash.js'
import {menu} from './menu.js'
import './style.css'

///////// Initial Page load.  Creates Hero and nav buttons //////////////

const container = document.querySelector('#content')

const hero = document.createElement('div')
hero.classList.add('hero')

container.appendChild(hero)

const name = document.createElement('div')
name.classList.add('resturant-name')
name.textContent = `Queen's Brew House`

hero.appendChild(name)

const descript = document.createElement('div')
descript.textContent = `Local Microbrewery Serving the Queen's community daily from 12pm to midnight.  Located next door to the USPS Office`
descript.classList.add('hero-descript')

hero.appendChild(descript)

const navButtons = document.createElement('div')
navButtons.classList.add('nav-buttons')

const reservation = document.createElement('div')
reservation.classList.add('reservation')

hero.appendChild(reservation)

descript.appendChild(navButtons)

const aboutBtn = document.createElement('button')
const menuBtn = document.createElement('button')
const contactBtn = document.createElement('button')
const reservationBtn = document.createElement('button')

aboutBtn.textContent = 'About'
menuBtn.textContent = 'Menu'
contactBtn.textContent = 'Contact'
reservationBtn.textContent = 'Reserve a Table'

navButtons.appendChild(aboutBtn)
navButtons.appendChild(menuBtn)
navButtons.appendChild(contactBtn)
reservation.appendChild(reservationBtn)

content.appendChild(aboutPage())

////////// Event Listeners for NAV Buttons //////////////


aboutBtn.addEventListener('click', () => {
    container.removeChild(container.lastChild)
    container.appendChild(aboutPage())
})

menuBtn.addEventListener('click', () => {
    container.removeChild(container.lastChild)
    container.appendChild(menu())
})



