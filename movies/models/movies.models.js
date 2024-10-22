import db from '../../db/db.js';

// Find a movie by the Id
export const findMovieById = movieId => {
    return db.movies.find(movie => movie.id === movieId);
}

// Gets a single movie by Id
export const getItem = id => {
    try
    {
        const movie = db?.movies?.filter(movie => movie?.id === parseInt(id))[0];
        return movie;
    }
    catch (error)
    {
        return error;
    }
}

// Gets a list of movies
export const listItems = () => {
    try
    {
        return db?.movies;
    }
    catch (error)
    {
        return error;
    }
}

// Adds a movie to the database
export const addItem = data => {
    try
    {
        const newMovie = { 
            id: db.movies.length + 1, 
            ...data };
        db.movies.push(newMovie);
        return newMovie;
    }
    catch (error)
    {
        return error;
    }
}

// Updates a movie in the database
export const editItem = (id, data) => {
    try
    {
        const index = db.movies.findIndex(movie => movie.id === parseInt(id));

        if (index === -1)
        { 
            throw new Error('Movie not found.');
        }
        else 
        {
            data.id = parseInt(id);
            db.movies[index] = data;
            return db.movies[index];
        }
    }
    catch (error)
    {
        return error;
    }
}

// Deletes a movie from the database
export const deleteItem = id => {
    try
    {
        const index = db.movies.findIndex(movie => movie.id === parseInt(id));

        if (index === -1) 
        {
            throw new Error('Movie not found.');
        }
        else
        {
            db.movies.splice(index, 1);
            return db.movies;
        }
    }
    catch (error)
    {
        return error;
    }
}