document.addEventListener('DOMContentLoaded', function () {
    const personajesList = document.getElementById('personajesList');
    const btn = document.getElementById('btn');

    let contadorPersonaje = 0;

    btn.addEventListener('click', function () {
        agregarPersonaje();
    });

    function agregarPersonaje() {
        fetch('https://rickandmortyapi.com/api/character')
            .then(response => response.json())
            .then(data => {
                
                if (contadorPersonaje >= data.results.length) {
                    alert('¡No hay más personajes!');
                } else {
                    
                    const personaje = data.results[contadorPersonaje];

                    
                    const listItem = document.createElement("li");
                    listItem.innerHTML = `<strong>${personaje.name}</strong> - Especie: ${personaje.species}, Estado: ${personaje.status}`;
                    personajesList.appendChild(listItem);

                   
                    contadorPersonaje++;
                }
            })
            .catch(error => console.error('Error:', error));
    }

    agregarPersonaje();
});
