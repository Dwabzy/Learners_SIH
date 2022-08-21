import { healthRoutes } from "../api/health";
import { userRoutes } from "../api/users";


export const routes = [];

// Declare all routes
routes.push(...healthRoutes);
routes.push(...userRoutes);

routes.forEach(function (element, index, array) {
    array[index].path = '/user-service' + element.path;
});