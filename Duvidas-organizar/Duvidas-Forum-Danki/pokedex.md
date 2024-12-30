# PERGUNTAS PARA TRABALHAR NA RESPOSTA

> Autor: Anthony Brasil Fernandes
> Módulo: Curso JavaScript Completo
> Título: Problema com botão submit

> Pergunta:
>
> > Na criação da aplicação pokedex proposta em um dos módulos estou adicionando outras funções, entre elas está uma maneira de enviar a quantidade de pokemon com um botão do tipo "submit", porem não consigo faze-lo funcionar. alguém sabe como resolver?

<!-- HTML -->

```html
<form id="form">
  <input
    id="quantidade"
    type="number"
    name="quantidade"
    placeholder="Insira a quantidadede de pokemons"
  />
  <button type="submit" value="Submit">Enviar</button>
</form>
```

```javascript
function pegaPokemon(quantidade) {
  fetch("https://pokeapi.co/api/v2/pokemon?limit=" + quantidade)
    .then((response) => response.json())
    .then((allpokemon) => {
      var pokedex = [];
      const promises = allpokemon.results.map((val) =>
        fetch(val.url).then((response) => response.json())
      );

      return Promise.all(promises).then((pokemonData) => {
        pokemonData.forEach((pokemonSingle, index) => {
          const val = allpokemon.results[index];
          if (pokemonSingle.types.length > 1) {
            pokedex.push({
              nome: val.name,
              img: pokemonSingle.sprites.front_default,
              id: pokemonSingle.id,
              type1: pokemonSingle.types[0].type.name,
              type2: pokemonSingle.types[1].type.name,
            });
          } else {
            pokedex.push({
              nome: val.name,
              img: pokemonSingle.sprites.front_default,
              id: pokemonSingle.id,
              type1: pokemonSingle.types[0].type.name,
            });
          }
        });

        if (pokedex.length === quantidade) {
          return new Promise((resolve) => {
            var pokemonBoxes = document.querySelector(".pokemon-boxes");
            pokemonBoxes.innerHTML = "";

            pokedex.forEach((val) => {
              if (val.type2 === undefined) {
                pokemonBoxes.innerHTML += `
                      <div class="pokemon-box">
                        <h2>${val.nome} #<span class="pokemon-id">${val.id}</span></h2>
                        <img src="${val.img}" alt="${val.nome}">
                        <p>Type: <span>${val.type1}</span></p>
                      </div>
                    `;
              } else {
                pokemonBoxes.innerHTML += `
                      <div class="pokemon-box">
                        <h2>${val.nome} #<span class="pokemon-id">${val.id}</span></h2>
                        <img src="${val.img}" alt="">
                        <p>Type: <span>${val.type1}, ${val.type2}</span></p>
                      </div>
                    `;
              }
            });

            resolve(pokedex);
          });
        }
      });
    });
}

const form = document.getElementById("form");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const inputValue = document.getElementById("quantidade").value;
  pegaPokemon(inputValue);
});

pegaPokemon(3);
```
