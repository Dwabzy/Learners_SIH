import { Exam} from "../../../db/models/Exam.model";
import { ResponseUtility } from "../../../utils/response.utility";

export async function getExams(request, h) {
    try {
        const {offset, limit} = request.query;
        const exams = await Exam.findAll({offset, limit});
        return h.response(ResponseUtility.generateSuccessResponse({exams}));
    } catch (error) {
        return h.response(ResponseUtility.generateFailureResponse(error)).code(500);
    }
}

export async function getExam(request, h) {
    try {
        const examId = request.params.id;
        const exam = await Exam.findAll({where: {id:examId} });
        return h.response(ResponseUtility.generateSuccessResponse({exam}));
    } catch (error) {
        return h.response(ResponseUtility.generateFailureResponse(error)).code(500);
    }
}


