const clock = document.getElementById('clock')

function ChangeTime() {
    let date = new Date()
    clock.innerHTML = date.toLocaleTimeString()
}

setInterval(ChangeTime, 1000)

// const colors = ['green', 'yellow', 'crimson', 'blue', 'red']

// function ColorLoop(array, index) {
//     if (index < array.length) {
//         console.log(array[index]);
//         clock.style.backgroundColor = array[index]
//         setTimeout(function () {
//             ColorLoop(colors, (index + 1))
//         }, 10000)
//     }
// }

// ColorLoop(colors, 0)