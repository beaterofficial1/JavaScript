(async function logMovies() {
    const response = await fetch("https://randomuser.me/api");
    const movies = await response.json();
    const { first } = movies.results[0].name
    const { last } = movies.results[0].name
    const { title } = movies.results[0].name
    console.log(title, first, last);
})();
