# Image Node
FROM node:20

# Crée un répertoire pour l'application
RUN mkdir -p /app
WORKDIR /app

# Copie les fichiers package.json et package-lock.json
COPY package*.json ./

# Installe les dépendances
RUN npm install

# Installe playwright
RUN npm install -g @playwright/test
RUN npx playwright install --with-deps

# Copie le reste des fichiers
COPY . .

# Expose le port 3000
EXPOSE 3000

# Démarre l'application
CMD ["npm", "start"]
