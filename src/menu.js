import Beer1 from './menu-imgs/beer1.jpg'
import Beer2 from './menu-imgs/beer2.jpg'

const IMGS = [Beer1, Beer2]
const NAMES = ['Casa Roja', 'Blonde Bella']

function beer(img, name) {
    return {img, name}
}

export function menu() {

    const container = document.createElement('div')

    for (let a = 0; a < IMGS.length; a++)   {
        let item  = beer(IMGS[a], NAMES[a])

        let card = document.createElement('div')

        let itemImg = document.createElement('img')
        itemImg.src = item.img

        let itemName = document.createElement('p')
        itemName.textContent = item.name

        card.appendChild(itemImg)
        card.appendChild(itemName)

        container.appendChild(card)
    }

    return container

}