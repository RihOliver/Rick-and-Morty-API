export async function getCharacters() {
    const response = await fetch("https://rickandmortyapi.com/api/character/?page=1")
    const result = await response.json()
    return result["results"]
}