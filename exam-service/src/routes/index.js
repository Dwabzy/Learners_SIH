import { examRoutes } from "../api/exams";
import { healthRoutes } from "../api/health";


export const routes = [];

// Declare all routes
routes.push(...healthRoutes);
routes.push(...examRoutes);

routes.forEach(function (element, index, array) {
    array[index].path = '/exam-service' + element.path;
});