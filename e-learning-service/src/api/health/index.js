import { ResponseUtility } from "../../utils/response.utility";

export const healthRoutes = [
    {
        method: 'GET',
        path: '/health',
        handler: function (request, h) {
            return h.response(ResponseUtility.generateSuccessResponse({message: 'The service is up and running.'}));
        }
    }
];
