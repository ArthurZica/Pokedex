const pokeApi = {};

function covertPokeapiToPokemon(pokeapiPokemon) {
    const pokemon = new Pokemon;
    pokemon.name = pokeapiPokemon.name;
    pokemon.id = pokeapiPokemon.id;
    pokemon.image = pokeapiPokemon.sprites.other.dream_world.front_default;
    const types = pokeapiPokemon.types.map((type) => type.type.name);
    pokemon.type = types[0];
    pokemon.types = types;
    
    return pokemon
}


pokeApi.getPokemons = (offset=0 , limit=10) => {
    const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;
    return fetch(url).then((response)=>response.json())
        .then((jsonBody)=>jsonBody.results)
        .then((pokemonList)=>pokemonList.map(pokeApi.getPokemonsDetail))
        .then((detailRequests) => Promise.all(detailRequests))
        .then((pokemonDetails) => (pokemonDetails))
}

pokeApi.getPokemonsDetail = (pokemon) => {
    return fetch(pokemon.url)
    .then((response) => response.json())
    .then((pokemon) => covertPokeapiToPokemon(pokemon))
}