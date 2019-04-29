let allMails = [
    {
        date: '23 Jan',
        from: 'Susanne' ,
        subject: 'About holiday at July' , 
        mail: 'Dear Leyda,as you probably know...' ,
        isFavorited: true,
    },
    {
        date: '22 Jan',
        from: 'Zeit Now' ,
        subject: 'Email confirmation' , 
        mail: 'Please confrim your email for 20th time..' ,
        isFavorited: true,
    },
    {
        date: '19 Jan',
        from: 'Facebook' ,
        subject: 'New message' , 
        mail: 'You got a message from a random per..' ,
        isFavorited: true,
    },
    {
        date: '18 Jan',
        from: 'Github' ,
        subject: 'Forgot your password' , 
        mail: 'Click on this link to reset your passwor..' ,
        isFavorited: true,
    },
    {
        date: '15 Jan',
        from: 'Roboard' ,
        subject: 'Bender sent you a DM' , 
        mail: 'KILL ALL HUMANS' ,
        isFavorited: true,
    },
    {
        date: '11 Jan',
        from: 'SuperOffer' ,
        subject: 'Earn $1000 from home' , 
        mail: 'CLICK HERE TO GET YOUR REWARD' ,
        isFavorited: true,
    },
    {
        date: '10 Jan',
        from: 'YSK',
        subject: 'Your e-mazbata is here',
        mail: 'Dear Leyda,to get your mazbata...',
        isFavorited: false,
    }
]

let html = ' '

function mail({date,from,subject,mail,isFavorited}) {
    html += `<div class="eMail">
    <span class="date">${date}</span>
    <span class="username">${from}</span>
    <span class="subject">${subject}</span>
    <p class="contentMail">${mail}</p> </div>`
}

//console.log(mail(allMails[3]))

allMails.forEach(mail)

//console.log(html)

const container = document.querySelector('.inboxContainer')
//console.log(container)

container.innerHTML = html

const input = document.querySelector('input')
//console.log(input)

// input.addEventListener('change',(event) => {
    
    
//     const filteredMail = mail.filter(mail => {
//         html += filteredMail
//     })

// })

input.addEventListener('input',x)

function x(event) {
    console.log(event)
    const searchKeyWord = event.target.value
    
    const filteredMails = allMails.filter(function(mail){
        return mail.subject.includes(searchKeyWord)
    })
    const html = ''
    
    filteredMails.forEach(mail)
    console.log(html)
 }



