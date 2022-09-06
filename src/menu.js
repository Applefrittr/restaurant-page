import Beer1 from './menu-imgs/beer1.jpg'
import Beer2 from './menu-imgs/beer2.jpg'
import Beer3 from './menu-imgs/beer3.jpg'
import Beer4 from './menu-imgs/beer4.jpg'
import Beer5 from './menu-imgs/beer5.jpg'
import Beer6 from './menu-imgs/beer6.jpg'

const IMGS = [Beer1, Beer2, Beer3, Beer4, Beer5, Beer6]
const NAMES = ['Casa Roja', 'Blonde Bella', 'Long Shore', 'Henderson IPA', 'Stout BLVD', 'Station House']
const DETAILS = ['7% ABV', '3.8% ABV', '9.6% ABV', '5.1% ABV', '11.8% ABV', '4% ABV']

function beer(img, name, abv) {
    return {img, name, abv}
}

export function menu() {

    const container = document.createElement('div')
    container.classList.add('menuPage')

    const menuHeaderContainer = document.createElement('div')
    menuHeaderContainer.classList.add('menuHeader')
    
    const menuHeader = document.createElement('h1')
    menuHeader.textContent = 'Current Drafts'
    
    const menuDescrpt = document.createElement('p')
    menuDescrpt.textContent = 'Drafts selection is changed each month on the 1st and the 15th.  Each rotation features tastsy drafts created from brewers around the state.'

    menuHeaderContainer.appendChild(menuHeader)
    menuHeaderContainer.appendChild(menuDescrpt)

    container.appendChild(menuHeaderContainer)

    for (let a = 0; a < IMGS.length; a++)   {
        let item  = beer(IMGS[a], NAMES[a], DETAILS[a])

        let card = document.createElement('div')
        card.classList.add('itemCard')

        let itemImg = document.createElement('img')
        itemImg.src = item.img

        let itemName = document.createElement('p')
        itemName.textContent = item.name

        let itemABV = document.createElement('p')
        itemABV.textContent = item.abv
        itemABV.style.color = 'blue'


        card.appendChild(itemImg)
        card.appendChild(itemName)
        card.appendChild(itemABV)

        container.appendChild(card)
    }

    return container

}