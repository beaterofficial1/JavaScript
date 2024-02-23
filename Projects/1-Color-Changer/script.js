const btn = document.querySelectorAll('.button')
const body = document.querySelector('body')

btn.forEach((buttons) => {
    buttons.addEventListener('click', (e) => {
        if (e.target.id === "crimson") {
            body.style.backgroundColor = e.target.id
        }
        if (e.target.id === "yellow") {
            body.style.backgroundColor = e.target.id
        }
        if (e.target.id === "purple") {
            body.style.backgroundColor = e.target.id
        }
        if (e.target.id === "green") {
            body.style.backgroundColor = e.target.id
        }
        if (e.target.id === "red") {
            body.style.backgroundColor = e.target.id
        }
        if (e.target.id === "default") {
            body.style.backgroundColor = '#1e2124'
        }
    })
})