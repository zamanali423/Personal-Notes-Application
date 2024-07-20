# Personal-Notes-Application
Welcome to the Personal Notes Application! This repository contains a web-based application for managing personal notes. The application is built using modern web technologies and follows a clean architecture pattern to ensure scalability and maintainability.

## Table of Contents
1.Architecture
<br/>
2.Setup Instructions
<br/>
3.Usage Guide
<br/>
4.Contributing
<br/>

## Architecture
The Personal Notes Application is designed with a modular architecture, separating the concerns into different layers and components. Here's a high-level overview:

### Frontend
Framework: `React.js`
<br/>
State Management: `Context API`
<br/>
Styling: `CSS-in-JS`
<br/>
Routing: `React Router Dom`

### Backend
Framework: `Node.js with Express.js`
<br/>
Database: `MongoDB`
<br/>
Authentication: `JWT (JSON Web Tokens)`

### Folder Structure

```

   personal-notes-app/
├── server/
│   ├── authentication/
        ├── generateToken.js
│   ├── database/
        ├── notes/
            ├── notes.js
        ├── users/
            ├── usersData.js 
│   ├── middleware/
        ├── validate.js
        ├── verifyToken.js
│   ├── router/
        ├── users/
            ├── userRouter.js
        ├── notes/
            ├── notesRouter.js
│   ├── validation/
        ├── validation.js
│   ├── index.js
│   ├── config.env
│   └── package.json
├── client/
│   ├── public/
│   ├── src/
│   │   ├── components/
            ├── GetNotes.js
            ├── CreateNotes.js
            ├── UpdateNotes.js
            ├── Navbar.js
│   │   ├── pages/
            ├── Home.js
            ├── Login.js
            ├── Logout.js
            ├── Signin.js  
│   │   ├── context/
            ├── userContext/
                ├── userContext.js
            ├── Provide.js 
│   │   ├── App.js
│   │   ├── index.js
│   └── package.json
├── README.md
└── .gitignore

```

## Setup Instructions
### Prerequisites
`Node.js (>=14.x)`
<br/>
`npm (>=6.x) or Yarn (>=1.x)`
<br/>
`MongoDB (local or cloud instance)`

## Backend Setup
1.Clone the repository:
    ```
    
    git clone https://github.com/zamanali423/Personal-Notes-Application
    cd personal-notes-app/server
    
    ```
2.Install dependencies:
    ```

    npm install

    ```
3.Configure environment variables:
Create a `.env` file in the `backend` directory and add the following variables:   
    ```

    PORT=3001
    MONGO_URI=your_mongodb_uri
    JWT_SECRET=your_jwt_secret

    ```
4.Start the backend server:
   ```

   npm start

   ```

## Frontend Setup
1.Navigate to the client directory:
     ```
     
     cd ../client

     ```
2.Install dependencies:
     ```

     npm install

     ```
3.Start the frontend development server:
    ```

    npm start

    ```

The application should now be running with the frontend accessible at 
<br/>
`http://localhost:3000` and the backend at `http://localhost:3001.`

## Usage Guide
### Registration and Login
<strong>Register:</strong> Create a new account using the registration form.
<br/>
<strong>Login:</strong> Log in with your credentials to access your notes.
<br/>
### Creating and Managing Notes
<strong>Create a Note:</strong> Use the "Create Note" button to create a new note.
<br/>
<strong>Edit a Note:</strong> Click on a note to edit its content.
<br/>
<strong>Delete a Note:</strong> Use the delete button on a note to remove it.
### User Profile
<strong>Profile:</strong> Access your profile
<br/>
<strong>Logout:</strong> Log out from the application securely.
### Contributing
We welcome contributions to the Personal Notes Application! To contribute, please follow these steps:
