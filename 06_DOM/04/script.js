const languages = document.querySelector('.language')

function addButton(name) {

    name.forEach((names) => {
        const element = document.createElement('li')
        element.appendChild(document.createTextNode(`${names}`))
        languages.appendChild(element)
    })
}

// addButton(myarr)


//Edit
const first = document.querySelector('li:nth-child(1)')

// let newli = document.createElement('li')
// newli.textContent = 'Hello'

// first.replaceWith(newli)

// first.outerHTML = "<li> Hii</li>"

first.remove()