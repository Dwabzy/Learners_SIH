import { getUser, getUsers, updateUser } from "./handlers";

export const userRoutes = [
    {
        method: 'GET',
        path: '/users',
        handler: getUsers
    },
    {
        method: 'GET',
        path: '/users/{id}',
        handler: getUser
    },
    {
        method: 'UPDATE',
        path: '/users/userN/{id}',
        handler: updateUser
    }
];
