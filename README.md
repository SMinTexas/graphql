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

There are several npm packages that serve as wrappers or libraries to facilitate the use of GraphQL in Node.js applications.  Here are some of the most popular packages:
1.  Apollo Server
    A.  Apollo Server is a community-driven, open-source GraphQL server that works with any GraphQL schema.  It is highly extensible and can integrate with various Node.js frameworks like Express, Koa, and Hapi.
    B.  Installation:  npm install apollo-server
    C.  Link:  apollographql.com/docs/apollo-server
2.  Express-GraphQL
    A.  This is a middleware for using GraphQL with Express.  It provides a simple way to create a GraphQL API on top of an Express server.
    B.  Installation:  npm install express-graphql
    C.  Link:  npmjs.com/package/express-graphql
    D.  Note:  This package has been deprecated
3.  GraphQL Yoga
    A.  This is a fully-featured GraphQL server based on Apollo Server, designed to provide an easy and simple setup with built-in features for best practices.
    B.  Installation:  npm install graphql-yoga
    C.  Link:  npmjs.com/package/graphql-yoga
4.  graphql-tools
    A.  This package provides utility functions for building a GraphQL schema, allowing you to compose and merge schemas and resolvers.
    B.  Installation:  npm install @graphql-tools/schema
    C.  Link:  npmjs.com/package/graphql-tools

There are several tools and libraries that serve as alternatives to Swagger (which is primarily designed for REST APIs) but are specifically tailored for GraphQL APIs.  Here are some of the most popular options:
1.  GraphQL Playground
    A.  A powerful interactive GraphQL IDE that allows you to explore your GraphQL API.  It provides features such as query execution, real-time results, and schema exploration.
    B.  Installation: it is often included with Apollo Server and other GraphQL server implementations.
    C.  Usage:  If you are using Apollo Server, GraphQL Playground is available at the /graphql endpoint by default.
2.  GraphiQL
    A.  An in-browser IDE for exploring GraphQL.  It provides a simple interface for sending queries and viewing responses.
    B.  Installation: can be integrated into GraphQL servers like Express-GraphQL or Apollo Server.
    C.  Usage:  Can be set up as middleware to allow developers to interact with the API directly in their browser.
3.  Postman
    A.  While traditionally used for REST APIs, Postman has added support for GraphQL.  You can create and test GraphQL queries as you can in REST API calls.
    B.  Usage:
        a. Create a new request in Postman
        b. Select the "GraphQL" tab and enter your query or mutation
        c. Execute the request and view the results in the response panel
4.  GraphQL Voyager
    A.  A tool that visualizes your GraphQL schema as a graph, allowing you to explore the relationships between types and fields.
    B.  Installation:  Can be added to your project via npm -> npm install -g graphql-voyager
    C.  Serve it with any GraphQL endpoint to visualize the schema.
5.  SpectaQL
    A.  A static site generate for GraphQL API documentation.  It generates human-readable documentation from your GraphQL schema.
    B.  Installation:  npm install -g spectaql
    C.  Usage:  Run `spectaql` from the command line to generate documentation based on your GraphQL schema.
6.  Hasura
    A.  An open-source GraphQL engine that provides real-time GraphQL APIs over new or existing PostgreSQL databases.  It also includes an integrated API Explorer.
    B.  Overview