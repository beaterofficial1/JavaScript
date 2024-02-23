const form = document.querySelector('form')
form.addEventListener('submit', (e) => {
    e.preventDefault()

    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)
    const results = document.querySelector('#results')

    if (height === '' || height <= 0 || isNaN(height)) {
        results.innerHTML = `Please Give a valid height: ${height}`
    } else if (height === '' || weight < 0 || isNaN(weight)) {
        results.innerHTML = `Please Give a valid weight: ${weight}`
    } else {
        const bmi = (weight / ((height * height) / 10000)).toFixed(2)
        const guide = document.querySelector('.weight-guide')
        //Show the result
        results.innerHTML = `<span>${bmi}</span>`
        if (results < 18) {
        } else if (results > 18.6 && results < 24.9) {
            guide.innerHTML = `<h3>Normal Range</h3>`
        } else if (results > 25) {
            guide.innerHTML = `<h3>OverWeight</h3>`
        }
    }
})