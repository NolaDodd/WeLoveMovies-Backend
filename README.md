# WeLoveMovies Capstone Project

You've been hired on as a backend developer for a new startup called WeLoveMovies! As another developer works on the design and frontend experience, you have been tasked with setting up a database and building out specific routes so that users can gain access to data about movies, theaters, and reviews.

[DEPLOYED WEBSITE](https://welovemovies-frontend-vux7.onrender.com/) (Note: You may need to click backend link first)

[DEPLOYED BACKEND](https://welovemovies-backend-282n.onrender.com/movies)

[LINK TO FRONTEND](https://github.com/NolaDodd/WeLoveMovies-Frontend)

#### URL Routes
- /movies
- /movies/:moviesId
- /movies/:movieId/theaters
- /movies/:movieId/reviews
- /theaters

![movies](https://res.cloudinary.com/strive/image/upload/w_1000,h_1000,c_limit/06596df6b4c59b453c69d84d2bc854b3-home.png)

This project is designed to test your ability to both build complex servers and access data through a database. To succeed at this project, you'll need to demonstrate you can do the following:

- Install and use common middleware packages.
- Receive requests through routes.
- Run tests from the command line.
- Access relevant information through route and query parameters.
- Create an error handler for the case where a route does not exist.
- Build an API following RESTful design principles.
- Create and customize a knexfile.js file.
- Create a connection to your database with Knex.
- Write database queries to complete CRUD routes in an Express server.
- Return joined and nested data with Knex.
- Write database migrations using Knex's migration tools.
- Deploy your backend server to a cloud service. It's not necessary to deploy the frontend.
- You will not need to make any edits to HTML or CSS for this project.

Note: When downloading the assessment files to your local machine, make sure you're running Node v18 before you run npm install.

Check which version you are running: node -v
If needed, change the version to v18: nvm use v18
For additional help, review the "Learn your tools: Visual Studio Code" lesson.

Project setup
Follow the instructions below to get this project up and running on your own machine:

### Download the Qualified assessment files to your computer.

Run npm install to install the project.
Use Postman to test your application and visit this repository to connect your backend work to a frontend application.
Run npm test to run the tests.
Note: Note that the tests make use of an in-memory SQLite database. When updating a record in an in-memory SQLite database, the server does not automatically respond with an array of updated records like PostgreSQL does. As a result, when updating a record, you will need to query the database again to return updated record.

### Instructions
You are tasked with both setting up the database and building a number of routes that will be used by the frontend application. For this project, you will start by making the necessary changes to the data tier and then proceed to make changes to the application tier following an inside-out development workflow. Each table is detailed below, as is each route.

### Database tables
You will create five tables for this project. View the docs/tables/ folder in this project to get more detailed information on each table.

You will need to create migrations for each of these tables and run those migrations.

Seed data is included in this project in the ./src/db/seeds folder. The seeds will run correctly if and only if the tables are setup as described in the previous documents.

#### Routes
You will create five routes for this project. View the docs/routes/ folder in this project to get more detailed information on each table. Note that some routes return data dependent on query parameters.

#### General tasks
You will also need to make sure the following tasks are complete.

- Your app.js file and server.js file are correctly configured, with your app.js file exporting the application created from Express.
- You make use of the cors package so that requests from the frontend can correctly reach the backend.
- If a request is made to a route that does not exist, the server returns a 404 error.
- If a request is made to a route that exists, but the HTTP method is wrong, a 405 error is returned.
- All of your routes should respond with the appropriate status code and should use a data key in the response.

Note: In addition to needing to pass the tests and requirements in the instructions here, please review the Rubric Requirements for the human-graded part of this project in your Chegg Skills curriculum page. You will need to deploy the application (backend and frontend) on Render.
