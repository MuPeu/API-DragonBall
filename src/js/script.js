const container = document.getElementById('characters-container');

fetch('https://dragonball-api.com/api/characters?page=1&limit=58')
    .then((res) => res.json())
    .then((data) => {
        console.log(data.items);
        data.items.forEach(character => {
            const card = document.createElement('div')
            card.className = 'card'
            card.innerHTML = `
                <img src=${character.image} alt=${character.name}/>
                <h2>${character.name}</h2>
                <p><strong>Raza:</strong> ${character.race}</p>
                <p><strong>Género:</strong> ${character.gender}</p>
            `
            container.appendChild(card)
        })
    })
    .catch((error) => console.error('Error fetching data:', error));