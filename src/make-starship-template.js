export default function makeStarshipTemplate(spaceships) {
    const template = document.createElement('template');
    template.innerHTML = `
    <div class="starship">
    <h3>${spaceships.name}</h3>
    <img src="https://swapi.co/api/starships/17/" alt=""></div>`;

    return template.content;

}