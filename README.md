# 🎬 SérieScope

**SérieScope** est une application web de gestion des séries qui permet aux utilisateurs de consulter, rechercher, filtrer, ajouter, modifier et supprimer des séries à travers une interface simple et intuitive.

Le projet utilise JavaScript Vanilla pour gérer les interactions avec l'utilisateur et Axios pour communiquer avec une API REST.

## ✨ Fonctionnalités

- 📺 Affichage des séries sous forme de cartes.
- 🔍 Recherche de séries par nom.
- 🎭 Filtrage des séries par genre.
- ➕ Ajout d'une nouvelle série.
- ✏️ Modification des informations d'une série.
- 🗑️ Suppression d'une série.
- 🌐 Récupération et gestion des données via une API REST.
- ⚠️ Gestion des erreurs et affichage des notifications.

## 🛠️ Technologies utilisées

- HTML5 : structure de l'application.
- CSS3 : mise en forme et design.
- JavaScript ES6+ : logique et interactions.
- Axios CDN : communication avec l'API.
- Git & GitHub : gestion des versions du projet.

## 📂 Structure du projet

```text
SerieScope/
│
├── index.html
├── css/
│   └── style.css
├── js/
│   └── main.js
└── src/
    ├── data/
    │   └── store.js
    ├── services/
    │   ├── api.js
    │   └── serieService.js
    └── ui/
        ├── cards.js
        ├── filters.js
        ├── form.js
        └── notify.js
```

## 🚀 Installation et lancement

### 1. Cloner le projet

```bash
git clone https://github.com/mariam-jbaili/S-rieScope.git
```

### 2. Accéder au dossier

```bash
cd S-rieScope
```

### 3. Lancer l'application

Ouvrir le fichier `index.html` avec l'extension **Live Server** de Visual Studio Code.

**Remarque :** Axios est déjà intégré au projet via CDN. Aucune installation avec npm n'est nécessaire.

## 🧩 Architecture du projet

Le projet est organisé en plusieurs modules :

- **api.js** : configuration d'Axios et de la communication avec l'API.
- **serieService.js** : gestion des opérations CRUD sur les séries.
- **cards.js** : affichage des séries.
- **filters.js** : recherche et filtrage des séries.
- **form.js** : gestion du formulaire d'ajout et de modification.
- **notify.js** : affichage des notifications.
- **store.js** : gestion de l'état de l'application.
- **main.js** : initialisation et coordination des fonctionnalités.

## 🌿 Gestion des branches Git

- `main` : version principale et stable.
- `develop` : branche de développement.
- `axios-service` : intégration et configuration d'Axios.
- `feature/navbar` : développement de la barre de navigation.

## 👩‍💻 Auteur

**Mariam Jbaili**

Projet réalisé dans le cadre de la formation YouCode.

---

⭐ Merci de découvrir SérieScope !

