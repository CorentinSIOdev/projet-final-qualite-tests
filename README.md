# Calculator Project – Full JavaScript Stack

Un projet de **calculatrice web moderne** réalisé avec une stack Full JavaScript :

- **Frontend** : HTML, CSS, Vanilla JavaScript  
- **Backend** : Node.js + Express  
- **Tests** : Jest (tests unitaires), Playwright (tests end-to-end), Autocannon (tests de performance)  
- **CI/CD** : GitHub Actions (Intégration et Déploiement continu)  
- **Conteneurisation** : Docker

---

## Installation

### Prérequis :
- Node.js (≥ v20)
- npm

### Installation locale :
```bash
git clone https://github.com/CorentinSIOdev/projet-final-qualite-tests.git
cd projet-final-qualite-tests
npm install
```

---

### Lancer le serveur
```bash
npm start
```
Le serveur Express démarre sur http://localhost:3000

## Tests
### Tests unitaires (Jest)
```bash
npm run test:jest
```

### Tests end-to-end (Playwright)
```bash
npm run test:playwright
```

### Tests de performance (Autocannon)
```bash
npm run test:perf
```

### Tous les tests en une commande
```bash
npm run test:all
```

## Docker 
### Build de l'image Docker
Dans le terminal, place-toi à la racine du projet puis lance :

```bash
docker build -t projet-final-qualite-tests .
```

### Lancer le conteneur
```bash
docker run -p 3000:3000 projet-final-qualite-tests
```

L'application sera disponible sur :
➡ http://localhost:3000

### Exécuter les tests dans le conteneur
✔️ Exécuter les tests Jest

```bash
docker run projet-final-qualite-tests npm run test:jest
```

✔️ Exécuter tous les tests (unitaires, E2E, perf)

```bash
docker run projet-final-qualite-tests npm run test:all
```
