import { getItem, listItems } from '../models/movies.models.js';

// Gets a single movie title by Id
export const getMovie = id => {
    try 
    {
        const resp = getItem(id);
        return resp ;
    }
    catch (error)
    {
        return error;
    }
}

// Gets a list of movies
export const listMovies = () => {
    try 
    {
        const resp = listItems();
        return resp;
    }
    catch (error)
    {
        return error;
    }
}