// <--------------DOM Selecting Element--------------->

// let element = document.querySelector('.title')
// let element = document.querySelectorAll('div') //nodelist
let element = document.getElementById('title')
// let element = document.getElementsByClassName('title')

// <--------------DOM--------------->
element.id
element.className
element.innerText
element.innerHTML
element.textContent
element.getAttribute('class')
element.setAttribute('class', 'heading title') //Always Overwrite
element.style.color = "crimson" //CSS

// To convert an HTML collection in Array
// let lists = Array.from(element)