import { addItem, returnItem } from '../models/rentals.models.js';
import { findMovieById } from '../models/movies.models.js';
import { findUserById } from '../models/users.models.js';

// Rents a movie - decrements the total number of available copies of the rented title
export const createRental = rentalInput => {
    try
    {
        const userId = parseInt(rentalInput.userId, 10);
        const movieId = parseInt(rentalInput.movieId, 10);
        const user = findUserById(userId);
        const movie = findMovieById(movieId);

        if (!user)
        {
            throw new Error('User not found.');
        }

        if (!movie)
        {
            throw new Error('Movie not found.');
        }

        if (movie.numberAvailable <= 0)
        {
            throw new Error('No copies of selected title available.');
        }

        const resp = addItem(userId, movieId, new Date(), rentalInput.rentalDuration);
        movie.numberAvailable -= 1;
        return resp;
    }
    catch (error)
    {
        return error;
    }
}

// Returns a rental title
export const returnRental = rentalId => {
    try
    {
        return returnItem(rentalId);
    }
    catch (error)
    {
        throw error;
    }
}