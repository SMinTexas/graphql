import { addMovie, editMovie, deleteMovie } from './mutations/movies.mutations.js';
import { listMovies, getMovie } from './queries/movies.queries.js';
import { listUsers, getUser } from './queries/users.queries.js';
import { listRentals, getRental } from './queries/rentals.queries.js';
import { createRental as createRentalMutation } from './mutations/rentals.mutations.js';
import { returnRental } from './mutations/rentals.mutations.js';
import { createUser } from './mutations/users.mutations.js';
import { GraphQLScalarType, Kind } from 'graphql';

// index.js is the main entry point for the GraphQL server

// dateScalar is a custom scalar type to handle Date objects in GraphQL.  This scalar ensures that date values are correctly parsed, serialized, and validated.
const dateScalar = new GraphQLScalarType({
    name: 'Date',
    description: 'Date custom scalar type',
    parseValue(value) {
        if (typeof value === 'string')
        {
            return new Date(value);
        }
        else if (typeof value === 'number')
        {
            return new Date(value);
        }
        throw Error('GraphQL Date Scalar parser expected a `string` or `number`');
    },
    serialize(value) {
        if (value instanceof Date) {
            return value.toISOString();
        }
        throw Error('GraphQL Date Scalar serializer expected a `Date` object');
    },
    parseLiteral(ast) {
        if (ast.kind === Kind.STRING) {
            return new Date(ast.value);
        }
        else if (ast.kind === Kind.INT)
        {
            return new Date(parseInt(ast.value, 10));
        }
        return new Error('Invalid literal value for Date');
    }
});

// typeDefs is a string that defines the GraphQL schema.  
// Object types define the structure of the data returned by the API.
// Each object type consists of fields, each with a specific type (ID, String, Int, Float, Boolean, Date)
// Input types define the structure of the data required for mutations. These types are used to validate input data.
// Query types define the operations that can be performed to fetch data from the API.
// Mutation types define the operations that can be performed to modify data in the API.
export const typeDefs = `#graphql
    scalar Date

    enum Genre {
        Action
        Drama
        Comedy
        Science Fiction
        Horror
        Thriller
        Romance
        Documentary
        Animation
        Fantasy
    }

    enum Rating {
        G
        PG
        PG_13
        R
    }

    # OBJECT TYPES
    # This "Movie" type defines the queryable fields for every movie in our data source
    type Movie {
        id: ID!
        title: String!
        genre: String!
        rating: String!
        year: Int!
        numberAvailable: Int!
    }

    type User {
        id: ID!
        userName: String!
        firstName: String!
        lastName: String!
        email: String!
        phone: String!
        createdAt: Date!
    }

    type Rental {
        id: ID!
        userId: ID!
        movieId: ID!
        rentalDate: Date!
        rentalDuration: Int!
        returnDate: Date
        userName: String!
        movieTitle: String!
    }

    # INPUT TYPES
    # Define the input objects for addMovie and editMovie mutations
    input MovieToEdit {
        id: ID!
        title: String!
        genre: String!
        rating: String!
        year: Int!
        numberAvailable: Int!
    }

    input MovieToAdd {
        title: String!
        genre: String!
        rating: String!
        year: Int!
        numberAvailable: Int!
    }

    input UserToAdd {
        userName: String!
        firstName: String!
        lastName: String!
        email: String!
        phone: String!
        createdAt: Date!
    }

    input RentalInput {
        userId: ID!
        movieId: ID!
        rentalDate: Date!
        rentalDuration: Int!
    }

    # The "Query" type is special:  it lists all of the available queries that
    # clients can execute, along with the return type for each.  In this case,
    # the "movies" query returns an array of zero or more movies.
    # QUERY TYPES
    type Query {
        movies: [Movie],
        movie(id: ID!): Movie,
        users: [User],
        user(id: ID!): User,
        rentals: [Rental],
        rental(id: ID!): Rental
    }


    # MUTATION TYPES
    type Mutation {
        addMovie(movieToAdd: MovieToAdd!): Movie,
        editMovie(movieToEdit: MovieToEdit!): Movie,
        deleteMovie(id: ID!): [Movie],
        createUser(userToAdd: UserToAdd!): User,
        createRental(rentalInput: RentalInput!): Rental!,
        returnRental(rentalId: Int!): Rental!
    }
`

// Resolvers is an object containing the functions that resolve the GraphQL queries and mutations.  Each resolver is responsible for returning data
// for a specific type and operation.  Connects the GraphQL schema with the underlying data logic
export const resolvers = {
    Date: dateScalar,
    // Resolvers for Queries
    Query: {
        movies: () => listMovies(),
        movie: (_, { id }) => getMovie(id),
        users: () => listUsers(),
        user: (_, { id }) => getUser(id),
        rentals: () => listRentals(),
        rental: (_, { id }) => getRental(id)
    },
    // Resolvers for Mutations
    Mutation: {
        addMovie: (_, { movieToAdd }) => addMovie(movieToAdd),
        editMovie: (_, { movieToEdit }) => editMovie(movieToEdit),
        deleteMovie: (_, { id }) => deleteMovie(id),
        createUser: (_, { userToAdd }) => {
            return createUser(userToAdd);
        },
        createRental: (_, { rentalInput }) => {
            return createRentalMutation(rentalInput);
        },
        returnRental: (_, { rentalId }) => {
            return returnRental(rentalId);
        }
    }
}