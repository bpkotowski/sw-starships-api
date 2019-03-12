
const URL = 'https://swapi.co/api/starships/';
const query = encodeURIComponent('Star Wars')
const page = 1;


// import makeStarshipTemplate from './starship-components.js/index.js';
import { loadStarships } from './starship-components.js';

fetch(URL)
    .then(response => response.json())
    .then(response => {
        loadStarships(response.results);
    });
