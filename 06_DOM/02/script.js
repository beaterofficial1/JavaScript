// create a new element in DOM
const parent = document.querySelector('.parent')
const children = parent.children
const FirstDay = parent.firstElementChild.innerHTML
const LastDay = parent.lastElementChild.innerHTML
const Day = document.querySelector(".day")

console.log(`Firstday: ${FirstDay}`);
console.log(`LastDay: ${LastDay}`);
console.log(`LastDay: ${LastDay}`);
console.log(`${Day.innerHTML} Brother of ${Day.nextElementSibling.innerHTML}`);

// for (let i = 0; i < children.length; i++) {
//     console.log(parent.children[i].innerText);
// }