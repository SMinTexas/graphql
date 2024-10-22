import { addItem, findUserById } from '../models/users.models.js';

// Adds a new user to the database
export const createUser = userToAdd => {
    try
    {
        const userExists = findUserById(userToAdd.userName);
        if (userExists)
        {
            throw new Error('User already exists.');
        }

        return addItem(
            userToAdd.userName, 
            userToAdd.firstName, 
            userToAdd.lastName, 
            userToAdd.email, 
            userToAdd.phone);
    }
    catch (error)
    {
        throw error;
    }
}

