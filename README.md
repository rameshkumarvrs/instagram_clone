# Instagram Clone

A simple Instagram clone built with React, Bootstrap, Axios, and JSON Server.

## Installation

Clone the repository:

```bash
git clone https://github.com/rameshkumarvrs/instagram_clone.git
cd instagram_clone
```

Install dependencies:

```bash
npm install
```

## Start the JSON Server (Backend)

Before starting the React application, start the JSON Server:

```bash
npx json-server --watch db/db.json --port 3002 --static ./db
```

The backend will be available at:

```
http://localhost:3002
```

## Start the React App

Open a new terminal and run:

```bash
npm start
```

The application will be available at:

```
http://localhost:3000
```

## Tech Stack

* React
* React Router
* Axios
* Bootstrap
* JSON Server


# Instagram Clone

## Screenshot

![Instagram Clone](screenshots)

## Live Demo

https://insta9369.netlify.app/

## Source Code

https://github.com/rameshkumarvrs/instagram_clone

## Note

This project uses JSON Server as the backend.

Start the backend before running the application:

```bash
npx json-server --watch db/db.json --port 3002 --static ./db
