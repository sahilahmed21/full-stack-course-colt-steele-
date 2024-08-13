// https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png

const container = document.querySelector('#container');
const baseURL = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'

for (let i = 0; i < 152; i++) {
    const pokemon = document.createElement('dic');
    const label = document.createElement('span');
    label.innerText = i
    const newImg = document.createElement('img');
    pokemon.append(newImg)
    pokemon.append(label)
    // label.append('newImg')
    container.appendChild(pokemon)
    newImg.src = `${baseURL}${i}.png`

}