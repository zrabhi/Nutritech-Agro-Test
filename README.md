# Nutritech-Agro-Test
#  ToDo Now - Your Simple To-Do List

## Overview
ToDo Now is a simple to-do list application designed to help you organize your tasks efficiently. This fullstack web application prioritizes user experience, offering a seamless and immersive interface. The home screen features a sign-up page to get you started on organizing your tasks.

## Features
- **Sign-up Page**: Start by creating an account to access your personalized to-do list.
- **Task Management**: Create, edit, and delete tasks with ease.
- **Priority Setting**: Prioritize your tasks to focus on what's most important.
- **Reminder Notifications**: Get reminders to stay on top of your tasks.

## Technologies Used
- **Frontend**: 
  - Next.js - for building dynamic and responsive UI.
  - Context API - for user management and state handling.
  - Toaster - for user feedback and notifications. 
  **Backend**: Pyhton-django - for server-side logic and API handling.
- **Database**: sqLite- for storing user and task data.
- **Design Tool**: Figma - Used to design the user interface and create an immersive user experience.

## Getting Started
To get started with ToDo Now, follow these steps:

2. **Install Dependencies**:
- Navigate to the project directory and install frontend dependencies:
  ```
  cd to-do-list/client
  npm install
  ```
- Install backend dependencies && migration:
  ```
  cd ../server
  pip3 install pipenv
  pip3 -m venv venv
  source venv/bin/activate 
  pip install -m requirements.txt
  python3 manage.py makemigrations
  python3 manage.py migrate
  
  ```

3. **Run the Application**:
- Start the frontend server:
  ```
  npm start
  ```
- Start the backend server:
  ```
  python3 manage.py runserver
  ```

4. **Open the Application**:
- Once the servers are running, open your web browser and navigate to `http://localhost:3000` to view the application.