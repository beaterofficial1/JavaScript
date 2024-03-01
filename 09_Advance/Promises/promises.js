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

// const promiseFive = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         let error = false
//         if (!error) {
//             resolve({ username: 'JavaScript', password: 1234 })
//         } else {
//             reject('ERROR: JS went wrong')
//         }
//     }, 1000);
// })

// async function consumePromiseFive() {
//     try {
//         const response = await promiseFive
//         console.log(promiseFive);
//     } catch (error) {
//         console.log(error);
//     }
// }

// consumePromiseFive()

// (async function () {
//     let url = "https://randomuser.me/api/"
//     let response = await fetch(url)
//     let data = await response.json()
//     const { first } = data.results[0].name
//     const { last } = data.results[0].name
//     console.log(`${first} ${last}`);
// })()

// fetch('https://randomuser.me/api/')
//     .then((response) => {
//         return response.json()
//     })
//     .then((data) => {
//         console.log(data)
//     })

new Promise((resolve, reject) => {
  const response = fetch("https://randomuser.me/api/");
  resolve(response);
})
  .then((data) => {})
  .then((a) => {
    console.log(a);
  });

// function getRandomNumber(min, max) {
//   return new Promise((resolve, reject) => {
//     if (typeof min !== "number" || typeof max !== "number") {
//       reject(new Error("Both min and max must be numbers"));
//     } else if (min >= max) {
//       reject(new Error("Min must be less than max"));
//     } else {
//       const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
//       resolve(randomNumber);
//     }
//   });
// }

// Function to generate random number every 3 seconds
function generateRandomNumberEvery3Seconds() {
  setInterval(() => {
    getRandomNumber(1, 100)
      .then((number) => {
        console.log("Random number:", number);
      })
      .catch((error) => {
        console.error("Error:", error.message);
      });
  }, 3000); // 3 seconds in milliseconds
}

// // Call the function to start generating random numbers
// generateRandomNumberEvery3Seconds();
