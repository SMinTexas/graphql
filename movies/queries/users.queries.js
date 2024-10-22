import { getItem, listItems } from '../models/users.models.js';

// Gets a single user by Id
export const getUser = id => {
    try 
    {
        const resp = getItem(id);
        return resp; 
    }
    catch (error)
    {
        return error;
    }
}

// Gets a list of users
export const listUsers = () => {
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