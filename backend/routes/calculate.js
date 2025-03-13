const express = require('express');
const router = express.Router();
const { calculate } = require('../utils/calculator');

let history = []; // Historique des calculs

// Route POST /calculate
router.post('/', (req, res) => {
    // Récupération des données de la requête
    const { num1, num2, operation } = req.body;

    try {
        // Calcul du résultat 
        const result = calculate(Number(num1), Number(num2), operation);
        // Enregistrement de l'opération dans l'historique
        const entry = { num1, num2, operation, result };
        history.push(entry);

        // Limite l'historique à 10 éléments
        if (history.length > 10) {
            history.shift(); // Retire l'élément le plus ancien
        }

        // Envoi de la réponse
        res.json({ result, history });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

module.exports = router;
