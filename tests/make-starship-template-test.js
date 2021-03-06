const test = QUnit.test;

QUnit.module('make html template literal');

const spaceships = {
    "name": "Rebel transport",
    "model": "GR-75 medium transport",
    "manufacturer": "Gallofree Yards, Inc.",
    "cost_in_credits": "unknown",
    "length": "90",
    "max_atmosphering_speed": "650",
    "crew": "6",
    "passengers": "90",
    "cargo_capacity": "19000000",
    "consumables": "6 months",
    "hyperdrive_rating": "4.0",
    "MGLT": "20",
    "starship_class": "Medium transport",
    "pilots": [],
    "films": [
        "https://swapi.co/api/films/2/",
        "https://swapi.co/api/films/3/"
    ],
    "created": "2014-12-15T12:34:52.264000Z",
    "edited": "2014-12-22T17:35:44.680838Z",
    "url": "https://swapi.co/api/starships/17/"
};

import makeStarshipTemplate from '../src/starship-components.js';

test('test to construct starship template', assert => {
    const expected = `<div class="starship">
    <h3>Rebel transport</h3>
    <img src="https://swapi.co/api/starships/17/" alt=""></div>
    `;

    const result = makeStarshipTemplate(spaceships);

    assert.htmlEqual(result, expected);
});