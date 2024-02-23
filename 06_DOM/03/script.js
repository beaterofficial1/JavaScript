const div = document.createElement('div')
console.log(div);
div.className = "container"
div.id = Math.round(Math.random() * 100)
div.setAttribute('title', 'genrated title')
div.style.backgroundColor = 'crimson'
// div.innerText = "Inner Text"
const addText = document.createTextNode("Beater Official")
div.appendChild(addText)
document.body.appendChild(div)