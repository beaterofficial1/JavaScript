const timeOut = setTimeout(changeText, 5000)


function showTime() {
    let date = new Date()
    console.log(date.toLocaleTimeString());
}

const testDate = setInterval(showTime, 1000)

function changeText() {
    const heading = document.querySelector('h1')
    heading.innerHTML = "Beater Official"
}

const button = document.getElementById('btn')
button.addEventListener('click', (e) => {
    clearInterval(timeOut)
    clearInterval(testDate)
    console.log('setInterval and setTimeout is cleared');
})