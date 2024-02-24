const images = document.querySelector('#images')
const link = document.getElementById('google')


// google.addEventListener('click', (e) => {
//     // console.log(e.target.baseURI); // Events
//     // e.target
//     console.log(e);
//     console.log('Button Clicked');
// }, false) //event propogation & even bubbling


// link.addEventListener('click', (e) => {
//     e.preventDefault();
//     e.stopPropagation();
//     console.log('Google clicked');
// }, false)

images.addEventListener('click', (e) => {
    if (e.target.tagName === 'IMG') {
        let removeIt = e.target.parentNode
        removeIt.remove()
    }
    // removeIt.remove()
    // console.log(removeIt.parentNode);
    // removeIt.parentNode.removeChild(removeIt)

})