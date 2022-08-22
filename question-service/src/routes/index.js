import { healthRoutes } from "../api/health";
import { questionRoutes } from "../api/questions";


export const routes = [];

// Declare all routes
routes.push(...healthRoutes);
routes.push(...questionRoutes);

routes.forEach(function (element, index, array) {
    array[index].path = '/question-service' + element.path;
});