import { getUser, getUsers, updateUser,createUser } from "./handlers";

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
        path: '/userupd',
        handler: updateUser
    },
    {
        method: 'POST',
        path: '/userc',
        handler: createUser
    }
];
`   `