import Taps from './taps.jpg'
import Pour from './pour.jpg'
import Flight from './flight.jpg'

export function aboutPage()   {
    const about = document.createElement('div')
    about.classList.add('aboutPage')
    
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

/////////// Header ////////////////

    const missionHead = document.createElement('h1')
    missionHead.textContent = 'About Us'

    const missionDescript = document.createElement('p')
    missionDescript.textContent = `Our Mission - to bring the elitiest mircrobrew subculture straight to our home town of Queen's by expanding the neighboorhood's taste palate for a wide range of ales.  Down with the water-beer!`

    header.appendChild(missionHead)
    header.appendChild(missionDescript)

/////////// Row 1 //////////////

    const row1PicContainer = document.createElement('div')
    row1PicContainer.classList.add('imgContainers')
    const row1Dscpt = document.createElement('div')
    row1Dscpt.classList.add('dscrptContainers')

    const row1Pic = document.createElement('img')
    row1Pic.src = Taps

    const row1DscptHead = document.createElement('h2')
    row1DscptHead.textContent = `Hobby Homebrewers Rejoice!`
    const row1DscptPara = document.createElement('p')
    row1DscptPara.textContent = `Whether they are using an at home ale kit or run a microdistillery out of their parent's garage, we give the up and coming amateur brewers a chance to showcase their latest batches, for better or for worse.`

    row1Dscpt.appendChild(row1DscptHead)
    row1Dscpt.appendChild(row1DscptPara)
    row1PicContainer.appendChild(row1Pic)

    aboutRow1.appendChild(row1PicContainer)
    aboutRow1.appendChild(row1Dscpt)

//////////// Row 2 ////////////////

    const row2PicContainer = document.createElement('div')
    row2PicContainer.classList.add('imgContainers')
    const row2Dscpt = document.createElement('div')
    row2Dscpt.classList.add('dscrptContainers')

    const row2Pic = document.createElement('img')
    row2Pic.src = Pour

    const row2DscptHead = document.createElement('h2')
    row2DscptHead.textContent = `Quantity over Quality`
    const row2DscptPara = document.createElement('p')
    row2DscptPara.textContent = `We know Johnny with the beer kit he got from last Christmas won't create the next big double IPA, that's why we pull in brewers from around the state.  Someone is bound to have created something special.  Rule of large numbers!`

    row2Dscpt.appendChild(row2DscptHead)
    row2Dscpt.appendChild(row2DscptPara)
    row2PicContainer.appendChild(row2Pic)

    aboutRow2.appendChild(row2Dscpt)
    aboutRow2.appendChild(row2PicContainer)

///////////// Row 3 ////////////////

    const row3PicContainer = document.createElement('div')
    row3PicContainer.classList.add('imgContainers')
    const row3Dscpt = document.createElement('div')
    row3Dscpt.classList.add('dscrptContainers')

    const row3Pic = document.createElement('img')
    row3Pic.src = Flight

    const row3DscptHead = document.createElement('h2')
    row3DscptHead.textContent = `Inebriated Beginnings`
    const row3DscptPara = document.createElement('p')
    row3DscptPara.textContent = `After a night of self hatred fueled binge drinking and an argumenet with a mustache wielding beer aficionado, the idea for the brew house was formed.  Organizing an initial launch proved challenging at first but as the vision came together, more and more brewers were eager to be a part of the project.  We opened our doors Fall 2018 and have been rockin' and rollin' ever since.`

    row3Dscpt.appendChild(row3DscptHead)
    row3Dscpt.appendChild(row3DscptPara)
    row3PicContainer.appendChild(row3Pic)

    aboutRow3.appendChild(row3PicContainer)
    aboutRow3.appendChild(row3Dscpt)

//////////// Footer ///////////////

    const footerHead = document.createElement('h1')
    footerHead.textContent = 'Welcome All'

    const footerDescript = document.createElement('p')
    footerDescript.textContent = `Whether you are just beginning your journey into the world of craft beer or love to argue over the nuances between ales and lagers with strangers, come hang up your coat and try a few obscure beers with us!`

    footer.appendChild(footerHead)
    footer.appendChild(footerDescript)

    return about
}