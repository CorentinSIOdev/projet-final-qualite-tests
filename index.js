const express = require('express');
const app = express();
const calculateRoute = require('./backend/routes/calculate');
const cors = require('cors');
const path = require('path');

// Middleware
app.use(cors());
app.use(express.json());

// Configuration du moteur de rendu
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'frontend', 'views'));
app.use(express.static(path.join(__dirname, 'frontend', 'public')));

// Routes views
app.get('/', (req, res) => {
    res.render('index'); // va chercher views/index.ejs
});

// Routes
app.use('/calculate', calculateRoute);

// Démarrage du serveur
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Serveur démarré sur http://localhost:${PORT}`);
});
