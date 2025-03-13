const autocannon = require('autocannon');
const { PassThrough } = require('stream');

function runPerformanceTest() {
  // Crée un flux de données
  const buf = new PassThrough();
  // Crée une instance d'autocannon
  const instance = autocannon({
    url: 'http://localhost:3000/calculate', // URL de l'API
    method: 'POST', // Méthode HTTP
    connections: 50, // Nombre de connexions simultanées
    duration: 10, // Durée du test
    headers: {
      'Content-Type': 'application/json',
    },
    // Corps de la requête
    body: JSON.stringify({
      num1: 10, // Premier nombre
      num2: 5, // Deuxième nombre
      operation: '+', // Opération
    }),
  });

  // Affiche les résultats en temps réel dans le terminal
  autocannon.track(instance, { outputStream: buf });

  // Redirige les données du flux vers la sortie standard
  buf.pipe(process.stdout);
}

// Exécute le test de performance
runPerformanceTest();
