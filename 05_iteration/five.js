const marvel_heros = ["ironman", "spiderman", "thor", "captain america"]

// marvel_heros.forEach((item) => {
//     console.log(item);
// })

// function printMe(item) {
//     console.log(item);
// }
// marvel_heros.forEach(printMe)

// marvel_heros.forEach((item, index, arr) => {
//     console.log(item, index, arr);
// })

let dcUser = [
    {
        username: "Beater",
        status: "Playing Free Fire"
    },
    {
        username: "Eziox2",
        status: "offline"
    },
    {
        username: "Beater",
        status: "DND"
    },
]

dcUser.forEach((user) => {
    console.log(`Discord: ${user.username} is ${user.status}`);
})