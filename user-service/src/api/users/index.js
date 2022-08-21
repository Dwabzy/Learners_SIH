import { getUser, getUsers } from "./handlers";

export const userRoutes = [
    {
        method: 'GET',
        path: '/users',
        handler: getUsers
    },
    {
        method: 'GET',
        path: '/users/{user_id}',
        handler: getUser
    },
    {
        method: 'UPDATE',
        path: '/users/{user_id}',
        handler: getUser
    }
];
