// Ma clé API privé de TMDB
const API_KEY = `d41d709dde5ec43a05a3b9dffe8bdc21`

// Une recheche type /search/movie puis mon API_KEY puis query et une chaine de caractère
const url = `https://api.themoviedb.org/3/search/movie?api_key=d41d709dde5ec43a05a3b9dffe8bdc21`


// On va créer une constante sur le bouton et le champs de saisie, via document.querySelector(leur ID unique)
const ButtonElement = document.querySelector('#search');
const InputElement = document.querySelector('#inputValue');


function movieSection(movie) {
return movie.map((movie) =>
return `
<img src=${movie.poster_path} data-movie-id=${movie.id}/>
`;
}


function createMovieContainer() {
    const movieElement = document.createElement('div');
    movieElement.setAttribute('class', 'movie');

    const movieTemplate = `
    <section class="section">
    ${ movies.map((movie) => {
        return `
        <img src=${movie.poster_path} data-movie-id=${movie.id}/>
        `;
    })}
    </section>
    <div class="content">
        <p id="content-close">X</p>
    </div>
`;


movieElement.innerHTML = movieTemplate;
return movieElement;
}



// On décrit ensuite le comportement du boutton, 
// Ici onclick
// preventDefault pour éviter que la page ne se recharge
// création d'une variable pour chaque saisie dans le moteur de recherche
ButtonElement.onclick = function(event) {
    event.preventDefault();
    const value = InputElement.value;

    const newUrl = url + '&query=' + value;

    fetch(newUrl)
        .then((res) => res.json())
        .then((data) => {
            //data.results []
            console.log('Data : ', data);
        })
        .catch((error) => {
            console.log(`Error: `, error);

        });
    console.log(`
        Value: `, value);
}