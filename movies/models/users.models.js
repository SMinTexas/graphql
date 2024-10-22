import db from '../../db/db.js';

export const findUserById = userId => {
    return db.users.find(user => user.id === userId);
}

// Gets a single user record
export const getItem = id => {
    try
    {
        const user = db?.users?.filter(user => user?.id === parseInt(id))[0];
        return user;
    }
    catch (error)
    {
        return error;
    }
}

// Gets a list of all users
export const listItems = () => {
    try
    {
        return db?.users;
    }
    catch (error)
    {
        return error;
    }
}

// Adds a new user to the database
export const addItem = (userName, firstName, lastName, email, phone) => {
    try
    {
        const newUser = {
            id: db.users.length + 1,
            userName,
            firstName,
            lastName,
            email,
            phone,
            createdAt: new Date()
        };

        db.users.push(newUser);
        return newUser;
    }
    catch (error)
    {
        throw error;
    }
}