const url = window.location.href;
const pokemonId = url.split("?",2)[1];
const body = document.body;

console.log(pokemonId);

pokeApi.getOnePokemon(pokemonId).then((pokemon) => {
    const conteudo = createPokemonHtml(pokemon);
    body.innerHTML = conteudo;
    console.log(pokemon)
    
})

function createPokemonHtml(pokemon){
    return `<section class="content ${pokemon.type}">
    <div class="navMenu ">  
        <button type="button" class="btnVoltar btn" onclick="window.location.href='index.html'"><i class="fa fa-chevron-left" aria-hidden="true" style="color: #FFF;"></i></button>
            <h2 class="title">${pokemon.name}</h2>
        
            <div class="detail">
                <div class="types">
                ${pokemon.types.map((type) => `<p class="type ${type}">${type}</p>`).join('')}
                </div>
                <p class="pokemon_id">#${pokemon.id}</p>
            </div>
        </div>
            <img class="pokemon_img" src="${pokemon.image}" alt="">
        </div>    
        <div class="stats">
            <p>About</p>
            <ol class="lista_detalhes">
                <li class="height">Height: ${pokemon.height}cm</li>
                <li class="weight">Weight: ${pokemon.weight}kg</li>
                <li class="base_experience">Xp Base: ${pokemon.base_experience}</li>
            </ol>
            <p>Abilities:</p>
            ${pokemon.abilities.map((e) => `<li class="ability">${e.ability.name}</p>`).join('')}
        </div>
</section>`
}
