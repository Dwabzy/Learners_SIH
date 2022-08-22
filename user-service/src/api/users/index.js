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
        method: 'PUT',
        path: '/users/{user_id}',
        handler: updateUser
    }
];
