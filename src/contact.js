
export function contact()   {

    const container = document.createElement('div')
    container.classList.add('contactPage')

    const contactInfo = document.createElement('div')
    contactInfo.classList.add('contactInfo')

    const contactForm = document.createElement('div')

    container.appendChild(contactInfo)
    container.appendChild(contactForm)

    //////// build contactInfo div /////////

    const address = document.createElement('div')
    const addressHead = document.createElement('h1')
    addressHead.textContent = 'Address'

    const addressLine1 = document.createElement('p')
    addressLine1.textContent = '1000 Main Street'
    const addressLine2 = document.createElement('p')
    addressLine2.textContent = 'Queens, MA 12345'

    address.appendChild(addressHead)
    address.appendChild(addressLine1)
    address.appendChild(addressLine2)

    const hours = document.createElement('div')
    const hoursHead = document.createElement('h1')
    hoursHead.textContent = 'Hours'

    const hoursLine1 = document.createElement('p')
    hoursLine1.textContent = 'Monday to Sunday from 12pm - Midnight'

    hours.appendChild(hoursHead)
    hours.appendChild(hoursLine1)

    const contact = document.createElement('div')
    const contactHead = document.createElement('h1')

    contactHead.textContent = 'Contact'

    const contactEmail = document.createElement('p')
    contactEmail.textContent = 'Email: QueensBrew@123.com'
    const contactNum = document.createElement('p')
    contactNum.textContent = 'Phone: (123)456-7890'

    contact.appendChild(contactHead)
    contact.appendChild(contactEmail)
    contact.appendChild(contactNum)

    contactInfo.appendChild(address)
    contactInfo.appendChild(hours)
    contactInfo.appendChild(contact)

    ///////// build contact form ////////////

    const form = document.createElement('form')
    form.classList.add('contactForm')

    const formHead = document.createElement('h2')
    formHead.textContent = 'Leave Us a Note'

    form.appendChild(formHead)

    const name = document.createElement('div')

    const nameLabel = document.createElement('label')
    nameLabel.textContent = 'Name'
    nameLabel.htmlFor = 'name'

    const nameInput = document.createElement('input')
    nameInput.type = 'text'
    nameInput.id = 'name'
    nameInput.name = 'name'
    nameInput.required = 'true'

    name.appendChild(nameLabel)
    name.appendChild(nameInput)

    const email = document.createElement('div')

    const emailLabel = document.createElement('label')
    emailLabel.textContent = 'Email'
    emailLabel.htmlFor = 'email'


    const emailInput = document.createElement('input')
    emailInput.type = 'email'
    emailInput.id = 'email'
    emailInput.name = 'email'
    emailInput.required = 'true'

    email.appendChild(emailLabel)
    email.appendChild(emailInput)

    form.appendChild(name)
    form.appendChild(email)

    const comments = document.createElement('div')

    const commentsLabel = document.createElement('label')
    commentsLabel.textContent = 'Comments'
    commentsLabel.htmlFor = 'comments'

    const commentsInput = document.createElement('textarea')
    commentsInput.id = 'comments'
    commentsInput.name = 'comments'
    commentsInput.rows = '10'
    commentsInput.cols = '50'
    commentsInput.required = 'true'

    comments.appendChild(commentsLabel)
    comments.appendChild(commentsInput)

    const submitBtn = document.createElement('button')
    submitBtn.type = 'submit'
    submitBtn.textContent = 'Submit'
    submitBtn.style.width = '150px'

    form.appendChild(name)
    form.appendChild(email)
    form.appendChild(comments)
    form.appendChild(submitBtn)

    contactForm.appendChild(form)

    return container
}