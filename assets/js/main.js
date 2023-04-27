const listaPokemons = document.getElementById("pokemonsList");

function covertTypeLi(type){
    console.log(type)
    return `
    <li class="type">${type.type.name}</li>`
}

function helperLi(pokemon){
    const tipos = pokemon.types.map((e)=>covertTypeLi(e));
    const li = tipos.join('');
    return li
}

function convertPokemonHtml(pokemon){
    let li = [];
    const basicInfo = `
        <li class="pokemon">
            <span class="number">#${pokemon.id}</span>
            <span class="name">${pokemon.name}</span>

            <div class="detail">
        <ol class="types">`
    return `
    <li class="pokemon">
        <span class="number">#${pokemon.id}</span>
        <span class="name">${pokemon.name}</span>

        <div class="detail">
            <ol class="types">`+
            helperLi(pokemon)
            

            +
            `    
            </ol>
            <img src=${pokemon.sprites.other.dream_world.front_default}
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



