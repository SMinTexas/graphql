Overview

This project is a GraphQL API for a simplified movie rental system.  It is designed to manage users, movies, and rentals
efficiently.  It leverages GraphQL's capabilities to provide flexible data fetching, enabling clients to request exactly
the data they need.

Features
1.  User Management:  Create, retrieve, and manage user information
2.  Movie Management:  Add, retrieve, and manage movie details
3.  Rental Management:  Handle the creation, retrieval, and return of movie rentals.

Technologies
1.  GraphQL:  Query language for APIs that provides flexible data fetching capabilities
2.  Node.js:  JavaScript runtime for building the server
3.  JavaScript:  The primary programming language used in the project
4.  Apollo Server:  Library for creating a GraphQL server

Getting Started
1.  Prerequisites
    a.  Node.js (v14 or higher)
    b.  npm (Node Package Manager)

2.  Installation
    a.  Clone the repository: git clone https://github.com/SMinTexas/graphql
    b.  Navigate to the project directory:  cd graphqlvrest
    c.  Install dependencies by running this command:  npm install

3.  Running the Server
    a.  To start the GraphQL server, run this command:  node app.js
    b.  The server will be running at http://localhost:4000

Using the API

1.  Use a tool like Postman to interact with the API

Sample Queries:
1.  Retrieve all users:

    {
        "query": "{ users { id userName firstName lastName email phone createdAt } }"
    }

2.  Create a new movie:

    {
        "query": "mutation AddMovie($movieToAdd: MovieToAdd!) { addMovie(movieToAdd: $movieToAdd) { id title genre rating year numberAvailabe } }",
        "variables": {
            "movieToAdd": {
                "title": "Jurassic World",
                "genre": "Science Fiction",
                "rating": "PG_13",
                "year": 2015,
                "numberAvailable": 8
            }
        }
    }

3.  Return a rented movie:

    {
        "query": "mutation ReturnRental($rentalId: Int!) { returnRental(rentalId: $rentalId) { id userId movieId rentalDate rentalDuration returnDate userName movieTitle } },
        "variables": {
            "rentalId": 3
        }
    }

Project Structure

/graphqlvrest
|
|-- /db
|   |-- db.js                                       // Mock database for users, movies, and rentals
|-- /movies
|   |-- /models
|   |   |-- movies.models.js                        // Movie model functions
|   |   |-- rentals.models.js                       // Rental model functions
|   |   |-- users.models.js                         // User model functions
|
|-- |-- /mutations
|   |   |-- movies.mutations.js                     // Movie mutation functions
|   |   |-- rentals.mutations.js                    // Rental mutation functions
|   |   |-- users.mutations.js                      // User mutation functions
|
|-- |-- /queries
|   |   |-- movies.queries.js                       // Movie query functions
|   |   |-- rentals.queries.js                      // Rental query functions
|   |   |-- users.queries.js                        // User query functions