const express = require('express');
const app = express();
const port = 3000;


//Start the server listner
app.listen(port, () => {
    console.log(`Server listening http://localhost:${port}`)
})

//Blog's posts
const posts = [
    {
        titolo: "Ciambellone della tradizione",
        contenuto: "Il ciambellone è uno dei dolci più amati della cucina casalinga italiana. Soffice, profumato e semplice da preparare, accompagna da generazioni le colazioni e le merende delle famiglie.",
        immagine: "/images/ciambellone.jpg",
        tags: ["dolci", "colazione", "tradizione"]
    },
    {
        titolo: "Cracker alla barbabietola",
        contenuto: "Croccanti e dal caratteristico colore violaceo, i cracker alla barbabietola rappresentano uno snack originale e gustoso. Perfetti per un aperitivo o una pausa sfiziosa.",
        immagine: "/images/cracker_barbabietola.jpg",
        tags: ["snack", "barbabietola", "aperitivo"]
    },
    {
        titolo: "Pane fritto dolce",
        contenuto: "Una ricetta della tradizione che permette di recuperare il pane avanzato trasformandolo in un dolce semplice e goloso. Un esempio perfetto di cucina anti-spreco.",
        immagine: "/images/pane_fritto_dolce.jpg",
        tags: ["dolci", "pane", "anti-spreco"]
    },
    {
        titolo: "Pasta alla barbabietola",
        contenuto: "Un primo piatto dal colore sorprendente e dal sapore delicato. La barbabietola arricchisce la pasta con sfumature vivaci e un gusto equilibrato.",
        immagine: "/images/pasta_barbabietola.jpg",
        tags: ["primi", "pasta", "barbabietola"]
    },
    {
        titolo: "Torta paesana",
        contenuto: "Dolce tipico della tradizione contadina, preparato con ingredienti semplici e genuini. La torta paesana racconta la storia e i sapori delle cucine di una volta.",
        immagine: "/images/torta_paesana.jpg",
        tags: ["dolci", "tradizione", "famiglia"]
    }
];

//Define your routes
app.get('/', (req, res) => {
    res.send("Benvenuti nel mio blog di ricette!");
})

app.get('/bacheca', (req, res) => {
    res.json(posts);
})