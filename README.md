# book-collection-app
# Book Collection App

## Overview

The Book Collection App is a web application that allows users to view and search through a collection of books. The application is built using Node.js for the backend and React for the frontend. The backend serves the book data through an API, while the frontend provides a user-friendly interface to display and search the book collection.

## Features

- View a list of books with titles and authors.
- Search for books by title or author.
- Responsive design for better user experience across devices.

## Technologies Used

- **Backend**: Node.js, Express.js, CORS
- **Frontend**: React, Axios, React Router
- **Version Control**: Git
- **Deployment**: Heroku (Backend), Netlify (Frontend)

## Setup Instructions

### Prerequisites

- Node.js (https://nodejs.org/)
- npm (comes with Node.js)

### Backend Setup

1. **Clone the repository**:
    ```bash
    git clone https://github.com/your-username/book-collection-app.git
    cd book-collection-app/mynode-backend
    ```

2. **Install dependencies**:
    ```bash
    npm install
    ```

3. **Run the server**:
    ```bash
    node server.js
    ```

4. **Verify the backend**:
    Open your browser and navigate to `http://localhost:5000/api/books`. You should see the JSON data for the books.

### Frontend Setup

1. **Navigate to the frontend directory**:
    ```bash
    cd ../my-react-app
    ```

2. **Install dependencies**:
    ```bash
    npm install
    ```

3. **Run the development server**:
    ```bash
    npm start
    ```

4. **Verify the frontend**:
    Open your browser and navigate to `http://localhost:3000`. You should see the Book Collection App interface.
