# Note Taker

A simple note-taking application built with Node.js, Express.js, and plain HTML/CSS/JavaScript. This application allows users to write, save, and delete notes.

## Project Description

The Note Taker application helps users organize their thoughts and manage tasks by creating, viewing, and deleting notes. It uses a JSON file to persist data and provides a clean and user-friendly interface to interact with.

## Table of Contents

- [Project Description](#project-description)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Contributing](#contributing)
- [Screenshots](#screenshots)
- [Deployment on Render](#deployment-on-render)
- [Deployed Application](#deployed-application)
- [License](#license)

## Features

- Create new notes with titles and text.
- View existing notes.
- Delete notes.
- Responsive design with Bootstrap.
- Persistent data storage using a JSON file.

## Installation

1. **Clone the Repository**
2. **Install Dependencies**
   Ensure you have [Node.js](https://nodejs.org/) installed.
3. **Run the Application**
   Start the server: node server.js
   Navigate to `http://localhost:3001` in your web browser to use the application.

## Usage

### Home Page

- Visit the home page to access the Note Taker app.
- Click the "Get Started" button to navigate to the notes page.

### Notes Page

- Use the form on the right-hand side to create a new note by entering a title and text, then clicking "Save Note".
- View existing notes in the left-hand column. Click on a note to view its details.
- Click "New Note" to return to the form to create a new note.
- Click the trash icon next to a note to delete it.

## API Endpoints

### HTML Routes

- `GET /` - Returns the `index.html` file.
- `GET /notes` - Returns the `notes.html` file.

### API Routes

- `GET /api/notes` - Reads the `db.json` file and returns all saved notes as JSON.
- `POST /api/notes` - Receives a new note to save, adds it to `db.json`, and returns the new note.
- `DELETE /api/notes/:id` - Deletes a note by ID from `db.json`.

## Contributing

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Commit your changes (`git commit -m "Add new feature"`).
4. Push to the branch (`git push origin feature-branch`).
5. Open a pull request.

## Screenshots

![alt text](<Note Taker 1.png>)
![alt text](<Note Taker 2.png>)

## Deployment on Render

To deploy the Note Taker application using Render:

1. **Push to GitHub:**
   Ensure all your code is committed and pushed to your GitHub repository.

2. **Deploy on Render:**
   - Go to [Render.com](https://render.com) and log in.
   - Click on **"New"** and select **"Web Service"**.
   - Connect your GitHub repository and choose the appropriate branch.
   - Configure your service settings (Build Command: `npm install`, Start Command: `npm start`).
   - Set any required environment variables.

3. **Access Your Application:**
   - Render will provide a URL where your application is accessible after deployment.
   - Monitor and manage your deployment via the Render dashboard.

## Deployed Application 
https://note-taker-fvwk.onrender.com/ 

## License

This project is licensed under the [MIT LICENSE](LICENSE).

> [!NOTE]  
> Recourses used for creating code. Referred back to class work for file format such as reviewing class recording. Worked with peers on assignment and compared challenge template to assist with creating readme file.
