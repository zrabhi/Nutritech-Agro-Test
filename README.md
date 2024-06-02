# Nutritech-Agro-Test
#  ToDo Now - Your Simple To-Do List

## Overview
ToDo Now est une application simple de liste de tâches conçue pour vous aider à organiser vos tâches efficacement. Cette application web fullstack privilégie l'expérience utilisateur, offrant une interface fluide et immersive. L'écran d'accueil propose une page d'inscription pour vous aider à commencer à organiser vos tâches.

## Fonctionnalités
- **Page d'Inscription** : Commencez par créer un compte pour accéder à votre liste de tâches personnalisée.
- **Gestion des Tâches** : Créez, modifiez et supprimez des tâches facilement.
- **Réglage des Priorités** : Donnez la priorité à vos tâches pour vous concentrer sur ce qui est le plus important.
- **Notifications de Rappel** : Recevez des rappels pour rester au top de vos tâches.

## Technologies Utilisées
- **Frontend** :
  - Next.js - pour la création d'une interface utilisateur dynamique et réactive.
  - Context API - pour la gestion des utilisateurs et des états.
  - Toaster - pour les retours utilisateurs et les notifications.
- **Backend** : Pyhton-django - pour la logique côté serveur et la gestion de l'API.
- **Base de Données** : sqLite- pour stocker les données des utilisateurs et des tâches.
- **Outil de Conception** : Figma - Utilisé pour concevoir l'interface utilisateur et créer une expérience utilisateur immersive.

## Getting Started
To get started with ToDo Now, follow these steps:

1. **Cloner le Dépôt** :
- Clonez ce dépôt sur votre machine locale en utilisant :
  ```
  git clone https://github.com/your-username/Nutritech-Agro-Test.git
  ```

2. **Installer les Dépendances** :
- Accédez au répertoire du projet et installez les dépendances frontend :
  ```
  cd to-do-list/client
  npm install
  ```
- **Installer les Dépendances Backend et Effectuer la Migration** :
  ```
  cd to-do-list/server
  pip3 install pipenv
  pip3 -m venv venv
  source venv/bin/activate 
  pip install -m requirements.txt
  python3 manage.py makemigrations
  python3 manage.py migrate
  
  ```

3. **Lancer l'Application || onfigurer les Variables d'Environnement** :
  
-  Créez un fichier `.env` dans le répertoire `client` et ajoutez la variable d'environnement suivante :  
  ```
  NEXT_PUBLIC_BACK_END="127.0.0.1:8000"
  ```

- Lancez le serveur frontend :
  ```
  npm run dev
  ```
- Lancez le serveur backend :
  ```
  python3 manage.py runserver
- Créez un fichier `.env.local` dans le répertoire `client` et ajoutez la variable d'environnement suivante :  ```

4.  **Ouvrir l'Application** :
- Une fois les serveurs lancés, ouvrez votre navigateur web et accédez à `http://localhost:3000` pour voir l'application.
  ## Routes du Site Web
- `/`: Page d'inscription pour créer un nouveau compte utilisateur.
- `/login`: Page de connexion pour accéder à un compte utilisateur existant.
- `/dashboard`: Tableau de bord principal affichant la liste des tâches et les fonctionnalités de gestion des tâches.


## Visualiser les Conceptions
Vous pouvez voir les conceptions de ToDo Now sur Figma. [Cliquez ici pour voir les conceptions](https://www.figma.com/design/I0qR377erNNxojA8bZvhXS/TO-DO-LIST?node-id=8-60&t=idxUstDtzz2JMruX-1).

