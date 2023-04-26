const listaPokemons = document.getElementById("pokemonsList");

function convertPokemonHtml(pokemon){
    return `
    <li class="pokemon">
        <span class="number">#${pokemon.id}</span>
        <span class="name">${pokemon.name}</span>

        <div class="detail">
            <ol class="types">
                <li class="type">grass</li>
                <li class="type">poison</li>
            </ol>

            <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg"
                alt="${pokemon.name}">
        </div>
    </li>`
}

pokeApi.getPokemons().then((pokemonList)=> {
    console.log(pokemonList);
    const newList = pokemonList.map((e)=>convertPokemonHtml(e))
    const newHtml = newList.join('');
    listaPokemons.innerHTML+=newHtml;
})



