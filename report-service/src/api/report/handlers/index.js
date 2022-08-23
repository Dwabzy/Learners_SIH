import { Report } from "../../../db/models/report.model";
import { ResponseUtility } from "../../../utils/response.utility";


export async function getReport(request, h) {
    try {
        const userId = request.params.user_id;
        const report = await Report.findOne({where: {
            user_id:userId
     } });
        return h.response(ResponseUtility.generateSuccessResponse({report}));
    } catch (error) {
        return h.response(ResponseUtility.generateFailureResponse(error)).code(500);
    }
}


