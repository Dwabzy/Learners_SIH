import { Question } from "../../../db/models/Question.model";
import { ResponseUtility } from "../../../utils/response.utility";


export async function getQuestions(request, h) {
    try {
        const {offset, limit} = request.query;
        const questions = await Question.findAll({offset, limit});
        return h.response(ResponseUtility.generateSuccessResponse({questions}));
    } catch (error) {
        return h.response(ResponseUtility.generateFailureResponse(error)).code(500);
    }
}

export async function getQuestion(request, h) {
    try {
        const qId = request.params.id;
        const question = await Question.findAll({where: {id:qId} });
        return h.response(ResponseUtility.generateSuccessResponse({question}));
    } catch (error) {
        return h.response(ResponseUtility.generateFailureResponse(error)).code(500);
    }
}

export async function updateQuestion(request, h) {
    try {
        const qs = await Question.update(
            {
                question:"yes",
            },
            {
                where:{id:"74567"}
            }
        );
        console.log(qs);
    } catch (error) {
        return h.response(ResponseUtility.generateFailureResponse(error)).code(500);
    }
}
