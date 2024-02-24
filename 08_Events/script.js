const google = document.querySelector('#elephant')
google.addEventListener('click', (e) => {
    console.log(e.target.baseURI); // Events
    // console.log(e.target);
}, false)