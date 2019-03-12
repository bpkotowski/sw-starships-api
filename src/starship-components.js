export default function makeStarshipTemplate(starShips) {
    const template = document.createElement('template');
    template.innerHTML = `
    <div class="starship">
    <h3>${starShips.name}</h3>
    <img src="https://swapi.co/api/starships/17/" alt=""></div>`;

    return template.content;

}

const starshipList = document.getElementById('starship-container');

export function loadStarships(starShips) {
    starShips.forEach(starship => {
        const dom = makeStarshipTemplate(starship);
        starShips.appendChild(dom);
    });
}