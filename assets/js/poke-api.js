const pokeApi = {};

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
}