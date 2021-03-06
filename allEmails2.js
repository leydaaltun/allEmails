let allMails = [{
        date: '23 Jan',
        from: 'Susanne',
        subject: 'About holiday at July',
        mail: 'Dear Leyda,as you probably know...',
        isFavorited: false,
    },
    {
        date: '22 Jan',
        from: 'Zeit Now',
        subject: 'Email confirmation',
        mail: 'Please confrim your email for 20th time..',
        isFavorited: false,
    },
    {
        date: '19 Jan',
        from: 'Facebook',
        subject: 'New message',
        mail: 'You got a message from a random per..',
        isFavorited: false,
    },
    {
        date: '18 Jan',
        from: 'Github',
        subject: 'Forgot your password',
        mail: 'Click on this link to reset your passwor..',
        isFavorited: false,
    },
    {
        date: '15 Jan',
        from: 'Roboard',
        subject: 'Bender sent you a DM',
        mail: 'KILL ALL HUMANS',
        isFavorited: false,
    },
    {
        date: '11 Jan',
        from: 'SuperOffer',
        subject: 'Earn $1000 from home',
        mail: 'CLICK HERE TO GET YOUR REWARD',
        isFavorited: false,
    },
    {
        date: '10 Jan',
        from: 'YSK',
        subject: 'Your e-mazbata is here',
        mail: 'Dear Leyda,to get your mazbata...',
        isFavorited: false,
    }
]

const yesButton = document.querySelector('.deleteMail')
const overlay = document.querySelector('.overlay')
const noButton = document.querySelector('.dontDeleteMail')

function showConfirmationDialog(yesAction) {
    document.body.classList.add('dialog-visible')
        //added visible class to body
    overlay.addEventListener('click', function(event) {
        document.body.classList.remove('dialog-visible')
        yesButton.removeEventListener('click', newAction)
    })


    function newAction() {
        yesAction()
        yesButton.removeEventListener('click', newAction)

        document.body.classList.remove('dialog-visible')

    }

    yesButton.addEventListener('click', newAction)

    noButton.addEventListener('click', function(event) {
        document.body.classList.remove('dialog-visible')
    })



}



yesButton.addEventListener('click', function() {
    showConfirmationDialog(function() {
        console.log('zzzzz')

    })
})






const container = document.querySelector('.inboxContainer')
    //console.log(container)

container.addEventListener('click', function(event) {
    console.log(event)
    const parent = event.target.parentElement.parentElement
        //const buttons = document.querySelector('.button')
        // const parent = buttons.closest('.button')
    console.log(parent)
    const index = parent.dataset.index
    console.log(index)
    const deleteButton = document.querySelector('.deleteImg')
        //console.log(deleteButton)
    const overlay = document.querySelector('.overlay')
        //console.log(overlay)
    const dialog = document.querySelector('.dialog')
    if (event.target.classList.contains('star')) {
        console.log(`you've clicked on ${index}`)
        console.log(allMails)
        if (allMails[index].isFavorited) {
            allMails[index].isFavorited = false
        } else {
            allMails[index].isFavorited = true
        }

        showMails(allMails)
    }



    if (event.target.classList.contains('deleteImg')) {
        showConfirmationDialog(function() {
            allMails.splice(index, 1)
            showMails(allMails)

        })


    }

})



function showMails(allMails) {

    let html = ''

    allMails.forEach(function({ date, from, subject, mail, isFavorited }, index) {
        //console.log(index)
        let starClass = 'star favImg'
        if (isFavorited) {
            starClass = 'star favedImg'
        }
        html += `<div class="eMail" data-index="${index}">
        <span class="date">${date}</span>
        <span class="username">${from}</span>
        <span class="subject">${subject}</span>
        <p class="contentMail">${mail}</p>
        <div class="buttons"><button class="${starClass}"></button>
        <button class="deleteImg"></button></div></div>`

    })

    //container.innerHTML = html
    if (html === '') {
        container.innerHTML = `<div class="error">Sorry,no e-mails found.</div>`
    } else {
        container.innerHTML = html
    }
}

showMails(allMails)

const input = document.querySelector('input')
    //console.log(input)

input.addEventListener('input', function(event) {
    const searchKeyWord = event.target.value.toLowerCase()
        //console.log(searchKeyWord)

    const filteredMails = allMails.filter(function({ date, from, subject, mail }) {

        if (date.toLowerCase().includes(searchKeyWord)) {
            return true
        }
        if (from.toLowerCase().includes(searchKeyWord)) {
            return true
        }
        if (subject.toLowerCase().includes(searchKeyWord)) {
            return true
        }
        if (mail.toLowerCase().includes(searchKeyWord)) {
            return true
        }
        return false


    })



    console.log(filteredMails)


    showMails(filteredMails)
})