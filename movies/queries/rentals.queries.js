import { getItem, listItems } from '../models/rentals.models.js';

// Gets a single rental by Id
export const getRental = id => {
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

// Gets a list of rentals
export const listRentals = () => {
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
