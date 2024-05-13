const express = require('express');
const app = express();

// Datos de ejemplo de los juegos
const games = [
    { 
        id: 1,
        title: "Alan Wake 2",
        description: "Llega Saga Anderson para investigar asesinatos ritualistas en un pequeño pueblo...",
        image: "resources/images/Alanwake2.png"
    },
    { 
        id: 2,
        title: "Baldur Gate 3",
        description: "es un juego de rol basado en grupos, rico en historias, ambientado en el universo de Dungeons & Dragons...",
        image: "resources/images/BaldursGate3.jpg"
    },
    { 
        id: 3,
        title: "Elden Ring",
        description: "Desvela los misterios del poder del Círculo de Elden. Enfréntate a criaturas temibles y conoce a adversarios con pasados tumultuosos...",
        image: "resources/images/EldenRing.jpg"
    },
    { 
        id: 4,
        title: "Dead Island 2",
        description: "Un virus mortal se extiende por Los Ángeles y está convirtiendo a sus habitantes en zombis...",
        image: "resources/images/DEADISLAND2.jpg"
    },
    { 
        id: 5,
        title: "Ghost of Tsushima",
        description: "Forja un nuevo camino y emplea tácticas de guerra poco convencionales para liberar Tsushima...",
        image: "resources/images/ghostoftsushimaplaystation.jpg"
    },
    { 
        id: 6,
        title: "Bloodborne",
        description: "Enfrenta tus pesadillas mientras buscas respuestas en la antigua ciudad de Yharnam...",
        image: "resources/images/Bloodborne.jpg"
    },
    { 
        id: 7,
        title: "Daysgone",
        description: "Ponte en los zapatos sucios y salpicados del antiguo motero forajido Deacon St. John...",
        image: "resources/images/Daysgone.png"
    },
    { 
        id: 8,
        title: "FC24",
        description: "es el comienzo del futuro del fútbol. Con este título innovador y auténtico...",
        image: "resources/images/FC24.jpg"
    },
    { 
        id: 9,
        title: "God Of War",
        description: "Kratos vuelve a ser padre. Como mentor y protector de Atreus...",
        image: "resources/images/GodofWarplaystation.jpg"
    },
    { 
        id: 10,
        title: "Last Of Us Part II",
        description: "Cinco años después de su peligroso viaje a través de unos Estados Unidos pospandemia...",
        image: "resources/images/lastofusplaystation.jpg"
    },
    { 
        id: 11,
        title: "Marvel's Spider-Man",
        description: "nos encontramos con un Peter Parker experimentado en luchar contra el crimen organizado...",
        image: "resources/images/spidermanplaystation.jpg"
    },
    { 
        id: 12,
        title: "Street Fighter 6",
        description: "es el próximo paso en la evolución de la serie de Street Fighter...",
        image: "resources/images/Streetfighter6.png"
    },
    { 
        id: 13,
        title: "Uncharted 4",
        description: "Al comienzo de este episodio vemos a Nathan, que ha cambiado las aventuras y los tesoros por una vida normal...",
        image: "resources/images/uncharted4playstation.jpg"
    },
    { 
        id: 14,
        title: "Forza Horizon 5",
        description: "¡Tu aventura Horizon por excelencia te espera! Explora los dinámicos paisajes de mundo abierto y en constante evolución...",
        image: "resources/images/forzahorizon5xbox.jpg"
    },
    { 
        id: 15,
        title: "Gears 5",
        description: "Con el estallido de una guerra...",
        image: "resources/images/gears5.xbox.jpg"
    },
    { 
        id: 16,
        title: "Halo Infinite",
        description: "Cuando se pierde toda esperanza y el destino de la humanidad pende de un hilo...",
        image: "resources/images/haloinfinitexbox.jpg"
    },
    { 
        id: 17,
        title: "Sea Of Thieves",
        description: "Explora un vasto mundo abierto repleto de islas vírgenes, navíos hundidos y misteriosos artefactos...",
        image: "resources/images/seaofthievesxbox.jpg"
    },
    { 
        id: 18,
        title: "State Of Decay",
        description: "La vida tal como la conocías se ha ido al infierno después de la madre de todos los brotes de zombis...",
        image: "resources/images/stateofdecayxbox.jpg"
    },
    { 
        id: 19,
        title: "Fable",
        description: "¿Qué significa ser un héroe? Bueno, en la fantástica tierra de Albion...",
        image: "resources/images/fablexbox.jpg"
    }
];

// Ruta para obtener todos los juegos
app.get('/api/games', (req, res) => {
    res.json(games);
});

// Ruta para obtener un juego por su ID
app.get('/api/games/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const game = games.find(game => game.id === id);
    if (game) {
        res.json(game);
    } else {
        res.status(404).json({ message: 'Juego no encontrado' });
    }
});

// Inicia el servidor en el puerto 3000
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Servidor API escuchando en el puerto ${port}`);
});
