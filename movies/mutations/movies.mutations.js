import { editItem, addItem, deleteItem } from '../models/movies.models.js';

// Adds a movie to the database
export const addMovie = movieToAdd => {
    try
    {
        const resp = addItem(movieToAdd);
        return resp;
    }
    catch (error)
    {
        return error;
    }
}

// Updates a movie in the database
export const editMovie = movieToEdit => {
    try
    {
        const resp = editItem(movieToEdit?.id, movieToEdit);
        return resp;
    }
    catch (error)
    {
        return error;
    }
}

// Deletes a movie from the database
export const deleteMovie = id => {
    try
    {
        const resp = deleteItem(id);
        return resp;
    }
    catch (error)
    {
        return error;
    }
}