import { fetchBreeds, fetchCatByBreed } from "./cat-api";

const breedSelectElement = document.querySelector('.breed-select');
const catInfoElement = document.querySelector('.cat-info');
const loaderElement = document.querySelector('.loader');
const errorElement = document.querySelector('.error');

function selectBreed() {
    fetchBreeds(data).then((data) => {

        let optionsMarkup = data.map(({ name, id }) => {
            return `<option value=${id}>${name}</option>`;
        });
        breedSelectElement.insertAdjacentElement("beforeend", optionsMarkup);

    })
}