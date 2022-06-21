import "core-js"
import "regenerator-runtime/runtime"
import Character from "./character";
import { getCharacters } from "./character_service";
async function loadCharacters() {
    let characters = []
    let charactersJSON = await getCharacters()
    charactersJSON.forEach(character => {
        const newCharacter = new Character(
            character["id"], character["name"], character["status"],
            character["species"], character["type"], character["gender"]
        )
        characters.push(newCharacter)
    })
    renderCharacters(characters)
}

function renderCharacters(characters) {
    const ulElement = document.getElementById("characters-list")
    characters.forEach(Character => {
        const liElement = document.createElement("li")
        const text = `${Character.name} | ${Character.status} | ${Character.species} | ${Character.type} | ${Character.gender}`
        liElement.innerHTML = text
        ulElement.appendChild(liElement)
    })
}

loadCharacters()