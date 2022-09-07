import {aboutPage} from './splash.js'
import {menu} from './menu.js'
import {contact} from './contact.js'
import './style.css'
import GitIcon from './git.png'

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

aboutBtn.textContent = 'Home'
menuBtn.textContent = 'Beers'
contactBtn.textContent = 'Contact'
reservationBtn.textContent = 'Reserve a Table'

navButtons.appendChild(aboutBtn)
navButtons.appendChild(menuBtn)
navButtons.appendChild(contactBtn)
reservation.appendChild(reservationBtn)

////////// Nav container - where our different pages load ///////////

const navContainer = document.createElement('div')

container.appendChild(navContainer)

navContainer.appendChild(aboutPage())


////////// footer //////////

const footer = document.createElement('footer')
footer.textContent = 'Created Sept 2022 by Applefrittr'

const gitLink = document.createElement('a')
gitLink.href = 'https://github.com/Applefrittr'

const icon = document.createElement('img')
icon.src = GitIcon

gitLink.appendChild(icon)

footer.appendChild(gitLink)

container.appendChild(footer)

////////// Event Listeners for NAV Buttons //////////////


aboutBtn.addEventListener('click', () => {
    navContainer.removeChild(navContainer.firstChild)
    navContainer.appendChild(aboutPage())
})

menuBtn.addEventListener('click', () => {
    navContainer.removeChild(navContainer.firstChild)
    navContainer.appendChild(menu())
})

contactBtn.addEventListener('click', () => {
    navContainer.removeChild(navContainer.firstChild)
    navContainer.appendChild(contact())
})


