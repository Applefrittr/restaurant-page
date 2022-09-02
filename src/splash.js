import Taps from './taps.jpg'
import Pour from './pour.jpg'

export function aboutPage()   {
    const about = document.createElement('div')
    about.classList.add('aboutPage')
    
    // const aboutImg1 = document.createElement('div')
    // aboutImg1.classList.add('aboutImg')

    const header = document.createElement('div')
    const aboutRow1 = document.createElement('div')
    const aboutRow2 = document.createElement('div')
    const aboutRow3 = document.createElement('div')
    const footer = document.createElement('div')

    about.appendChild(header)
    header.classList.add('aboutHeader')
    about.appendChild(aboutRow1)
    aboutRow1.classList.add('rowContainers')
    about.appendChild(aboutRow2)
    aboutRow2.classList.add('rowContainers')
    about.appendChild(aboutRow3)
    aboutRow3.classList.add('rowContainers')
    about.appendChild(footer)
    footer.classList.add('aboutHeader')

    const missionHead = document.createElement('h1')
    missionHead.textContent = 'About Us'

    const missionDescript = document.createElement('p')
    missionDescript.textContent = `Our Mission - to bring the elitiest mircrobrew subculture straight to our home town of Queen's by expanding the neighboorhood's taste palate for a wide range of ales.  Down with the water-beer!`

    header.appendChild(missionHead)
    header.appendChild(missionDescript)

    const row1PicContainer = document.createElement('div')
    row1PicContainer.classList.add('imgContainers')
    const row1Dscpt = document.createElement('div')
    row1Dscpt.classList.add('dscrptContainers')

    const row1Pic = document.createElement('img')
    row1Pic.src = Taps

    const row1DscptHead = document.createElement('h2')
    row1DscptHead.textContent = `Hobby Homebrewers Rejoice!`
    const row1DscptPara = document.createElement('p')
    row1DscptPara.textContent = `Whether they are using an at home ale kit or run a microdistillery out of their parents garage, we give the local up and coming amateur brewers a chance to showcase their latest batches, for better or for worse.`

    row1Dscpt.appendChild(row1DscptHead)
    row1Dscpt.appendChild(row1DscptPara)
    row1PicContainer.appendChild(row1Pic)

    aboutRow1.appendChild(row1PicContainer)
    aboutRow1.appendChild(row1Dscpt)

////////////

    const row2PicContainer = document.createElement('div')
    row2PicContainer.classList.add('imgContainers')
    const row2Dscpt = document.createElement('div')
    row2Dscpt.classList.add('dscrptContainers')

    const row2Pic = document.createElement('img')
    row2Pic.src = Pour

    const row2DscptHead = document.createElement('h2')
    row2DscptHead.textContent = `Quantity over Quality`
    const row2DscptPara = document.createElement('p')
    row2DscptPara.textContent = `We know Johnny with the beer kit he got from last Christmas won't create the next big double IPA, that's why we pull in brewers from around the state.  Someone's bound to have created something special.  Rule of large numbers!`

    row2Dscpt.appendChild(row2DscptHead)
    row2Dscpt.appendChild(row2DscptPara)
    row2PicContainer.appendChild(row2Pic)

    aboutRow2.appendChild(row2Dscpt)
    aboutRow2.appendChild(row2PicContainer)

    // const imgContainer = document.createElement('div')
    // about.appendChild(imgContainer)
    
    // const aboutImg1 = document.createElement('img')
    // aboutImg1.src = AboutImg1


    // imgContainer.appendChild(aboutImg1)

    // const aboutDescrpt = document.createElement('div')
    // aboutDescrpt.textContent = 'Place holder for About Page, YEYEYYE'
    // aboutDescrpt.classList.add('aboutDescript')

    // about.appendChild(aboutDescrpt)

    return about
}