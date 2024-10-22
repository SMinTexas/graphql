import db from '../../db/db.js';//document this code

// Gets a single rental record
export const getItem = id => {
    try
    {
        const rental = db.rentals.find(rental => rental.id === parseInt(id));
        if (!rental)
        {
            throw new Error('Rental not found.');
        }

        const movie = db.movies.find(movie => movie.id === rental.movieId);
        const user = db.users.find(user => user.id === rental.userId);

        return {
            ...rental,
            movieTitle: movie ? movie.title : null,
            userName: user ? user.userName : null
        };
    }
    catch (error)
    {
        throw error;
    }
}

// Gets a list of rentals
export const listItems = () => {
    try
    {
        return db.rentals.map(rental => {
            const movie = db.movies.find(movie => movie.id === rental.movieId);
            const user = db.users.find(user => user.id === rental.userId);

            return {
                ...rental,
                movieTitle: movie ? movie.title : null,
                userName: user ? user.userName : null
            };
        });
    }
    catch (error)
    {
        throw error;
    }
}

// Adds a new rental - this will also decrement the total number available from the rented title
export const addItem = (userId, movieId, rentalDate, rentalDuration) => {
    try
    {
        const newRental = { id: db.rentals.length + 1, userId, movieId, rentalDate: new Date(rentalDate), rentalDuration };
        db.rentals.push(newRental);
        return newRental;
    }
    catch (error)
    {
        return error;
    }
}

// Returns a rentals - this will increment the total number available of the rented title
export const returnItem = rentalId => {
    try
    {
        const rentalIndex = db.rentals.findIndex(rental => rental.id === rentalId);
        if (rentalIndex === -1)
        {
            throw new Error('Rental not found');
        }
    
        const rental = db.rentals[rentalIndex];
        const movie = db.movies.find(movie => movie.id === rental.movieId);
        const user = db.users.find(user => user.id === rental.userId);

        if (!movie)
        {
            throw new Error('Movie not found');
        }

        if (!user)
        {
            throw new Error('User not found');
        }
    
        movie.numberAvailable += 1;
    
        // this will remove the rental from the db
        db.rentals.splice(rentalIndex, 1);
    
        return {
            id: rental.id,
            userId: rental.userId,
            movieId: rental.movieId,
            rentalDate: rental.rentalDate,
            rentalDuration: rental.rentalDuration,
            returnDate: new Date(),
            userName: user.userName,
            movieTitle: movie.title
        };
    }
    catch (error)
    {
        throw error;
    }
}