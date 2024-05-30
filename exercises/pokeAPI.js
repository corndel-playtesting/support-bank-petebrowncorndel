export async function getPokemonList() {
    // TODO
    const response = await fetch ('https://pokeapi.co/api/v2/pokemon')
    const data = await response.json()

    const pokeNames = data.results.map(pokemon => pokemon.name)
    return pokeNames
  }
  