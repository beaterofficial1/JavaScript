// const promiseOne = new Promise(function (resolve, reject) {
//     // Do an async task
//     // DB call , Network call
//     setTimeout(function () {
//         console.log('Async task is complete');
//         resolve()
//     }, 1000)
// })

// promiseOne.then(() => {
//     console.log("Promise consumed");
// })


// new Promise((resolve, reject) => {
//     setTimeout(function () {
//         console.log("Async task 2");
//         resolve()
//     }, 1000)
// }).then(function () {
//     console.log("Asyn 2 resolved");
// })


// const promiseThree = new Promise((resolve, reject) => {
//     setTimeout(function () {
//         const data = { username: 'beater', email: 'beater@github.com', }
//         resolve(data)
//     }, 1000)
// })

// promiseThree.then(function (data) {
//     console.log(data);
// })

// const promiseFour = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         let error = true
//         const dataTwo = { username: 'beater', email: 'beater@github.com', }
//         if (!error) {
//             resolve(dataTwo)
//         } else {
//             reject('ERROR: Something went wrong')
//         }

//     }, 1000);
// })

// promiseFour
//     .then((user) => {
//         return user.username
//     })
//     .then((username) => {
//         console.log(username);
//     })

//     .catch((error) => {
//         console.log(error);
//     })
//     .finally(() => {
//         console.log("The Promise is either resolved or rejected");
//     })


const promiseFive = new Promise((resolve, reject) => {
    setTimeout(() => {
        let error = false
        if (!error) {
            resolve({ username: 'JavaScript', password: 1234 })
        } else {
            reject('ERROR: JS went wrong')
        }
    }, 1000);
})

async function consumePromiseFive() {
    try {
        const response = await promiseFive
        console.log(promiseFive);
    } catch (error) {
        console.log(error);
    }
}

consumePromiseFive()