const express = require('express');
const app = express();

// Define la ruta de la API para obtener la lista de juegos
app.get('/api/games', (req, res) => {
    // Lógica para obtener los datos de los juegos (pueden ser almacenados en una base de datos o en memoria)
    const games = [
        // Aquí puedes definir los datos de los juegos
    ];

    // Envía los datos de los juegos como respuesta en formato JSON
    res.json(games);
});

// Inicia el servidor en el puerto 3000
app.listen(3000, () => {
    console.log('Servidor API en funcionamiento en http://localhost:3000');
});
