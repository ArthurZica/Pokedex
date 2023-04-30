const listaPokemons = document.getElementById("pokemonsList");
const loadMoreButton = document.getElementById("loadMoreButton");
const limit=10;
let offset=0;
const maxRecords = 151;
loadPokemonItens(offset,limit);

loadMoreButton.addEventListener("click",()=>{
    offset+=limit;
    const qtdRecords = offset+limit;
    if(qtdRecords >= maxRecords){
        console.log("dasdss");
        const newLimit = maxRecords-offset;
        loadPokemonItens(offset,newLimit)
        loadMoreButton.parentElement.removeChild(loadMoreButton);
    }else{
        loadPokemonItens(offset,limit)
    }
})


function convertPokemonToLi(pokemon) {
    return `
        <li class="pokemon ${pokemon.type}" onclick="window.location.href='poke-detail.html?${pokemon.id}'">
            <span class="number">#${pokemon.id}</span>
            <span class="name">${pokemon.name}</span>
            <div class="detail">
                <ol class="types">
                    ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
                </ol>
                <img src="${pokemon.image}"
                     alt="${pokemon.name}">
            </div>
        </li>
    `
}

function loadPokemonItens(offset,limit){
    pokeApi.getPokemons(offset,limit).then((pokemonList)=> {
        const newList = pokemonList.map((e)=>convertPokemonToLi(e))
        const newHtml = newList.join('');
        listaPokemons.innerHTML+=newHtml;
    })
}



