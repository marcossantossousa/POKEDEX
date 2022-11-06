const pokemonName = document.querySelector('.pokemon_name');
const pokemonNumber = document.querySelector('.pokemon_number');
const pokemonImage = document.querySelector('.pokemon_image');

const form = document.querySelector('.form');
const input = document.querySelector('.input_search');
const buttonPrev = document.querySelector('.btn-prev');
const buttonNext = document.querySelector('.btn-next');

let searchPokemon = 1;


const fetchPokemon = async (pokemon) => {

    const apiResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.toLowerCase()}`);

    if (apiResponse.status === 200) {
        const data = await apiResponse.json();
        return data;
    }
}

const renderPokemon = async (pokemon) => {

    pokemonName.innerHTML ='Carregando...';
    pokemonNumber.innerHTML ="";

    const data = await fetchPokemon(pokemon);

    if (data) {
        pokemonName.innerHTML = data.name;
        pokemonNumber.innerHTML = data.id;
        pokemonImage.src = data['sprites']['versions']['generation-v']['black-white']['animated']['front_default'];
        input.value = "";
    }else {
        pokemonName.innerHTML = 'Não encontrado';
        pokemonNumber.innerHTML = "";
    }
}

form.addEventListener('submit', (event) => {
    event.preventDefault();
    renderPokemon(input.value);
});
buttonPrev.addEventListener('click', () => {
    alert('prev clicked');
});
buttonNext.addEventListener('click', () => {
    alert('next clicked');
});


renderPokemon(searchPokemon);