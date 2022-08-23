import { getReport } from "./handlers";

export const reportRoutes = [
    {
        method: 'GET',
        path: '/report/{id}',
        handler: getReport
    }
];
