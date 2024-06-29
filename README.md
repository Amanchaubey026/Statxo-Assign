# Statxo

This is a powerful and intuitive task management tool designed to streamline your business operations. Whether you need to manage large volumes of tasks, track financial metrics, or ensure timely updates, it has you covered. With real-time editing, detailed tracking, and a user-friendly interface, It helps you stay organized and in control.



## Project Type

Frontend | Backend | FullStack

## Deplolyed App

Frontend: https://statxo-assign.vercel.app/

Backend: https://statxo-assign.onrender.com

## Directory Structure

```
├─ .gitignore
├─ README.md
├─ client
│  ├─ .eslintrc.cjs
│  ├─ .gitignore
│  ├─ README.md
│  ├─ index.html
│  ├─ package-lock.json
│  ├─ package.json
│  ├─ public
│  │  └─ vite.svg
│  ├─ src
│  │  ├─ App.css
│  │  ├─ App.jsx
│  │  ├─ assets
│  │  │  ├─ datavideo.mp4
│  │  │  └─ react.svg
│  │  ├─ components
│  │  │  ├─ Home.jsx
│  │  │  ├─ Login.jsx
│  │  │  ├─ Logout.jsx
│  │  │  ├─ Navbar.jsx
│  │  │  ├─ Signup.jsx
│  │  │  └─ TaskTable.jsx
│  │  ├─ index.css
│  │  └─ main.jsx
│  └─ vite.config.js
└─ server
   ├─ .env
   ├─ Accesslogs
   │  └─ sample.dummy
   ├─ config
   │  └─ db.config.js
   ├─ controller
   │  ├─ tasks.controller.js
   │  └─ users.controller.js
   ├─ index.js
   ├─ middleware
   │  └─ users.middleware.js
   ├─ models
   │  ├─ blacklistToken.model.js
   │  ├─ task.modeel.js
   │  └─ users.model.js
   ├─ package-lock.json
   ├─ package.json
   └─ routes
      ├─ tasks.routes.js
      └─ users.routes.js
```

# Project Features

- Implemented user registration, login, and logout functionalities.
- Password hashing using bcrypt for enhanced security.
- Access tokens are provided to the frontend to verify user identity.
- Logout functionality includes blacklisting the access token to prevent unauthorized access.
- Logs the user data in the backend who changed the data.
- Updates data on the UI with the user's username and date and time when edited.
- Responsive layout for all types of screens.

  
## Installation & Getting started

Detailed instructions on how to install, configure, and get the project running.

```bash
git clone https://github.com/ShubhKeshari/Statxo.git

```
To start Frontend

```bash
cd client

npm install

npm run dev

```
To start Backend

```bash
cd server

npm install

npm run server
```

## API Endpoints

Backend Applications provide a list of your API endpoints, methods, brief descriptions.

<p>POST /users/register - create a new user with validation and registration logic</p>
<p>POST /users/login - authenticate a user with validation and authentication logic</p>
<p>POST /users/logout - logout a user</p>
<p>GET /tasks/task - Get all the data of tasks</p>
<p>PATCH /tasks/update/:id - To modify the data in the backend</p>

## Technology Stack

List and provide a brief overview of the technologies used in the project.

- React.js
- Chakra-ui
- Node.js
- Express.js
- MongoDB
