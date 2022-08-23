import { healthRoutes } from "../api/health";
import { reportRoutes } from "../api/report";


export const routes = [];

// Declare all routes
routes.push(...healthRoutes);
routes.push(...reportRoutes);

routes.forEach(function (element, index, array) {
    array[index].path = '/report-service' + element.path;
});