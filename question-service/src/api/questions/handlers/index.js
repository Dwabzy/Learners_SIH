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

export async function createQuestion(req, h){
    try {
        const qcreate = await Question.create({ id:"52023", question: "what",option_1: "a", option_2: "b", option_3: "c",option_4:"d",answer:"2",sub_category_id:"680",difficulty_level_id:"24",info:"null" });
    console.log(qcreate);
    } catch(error) {
        return h.response(ResponseUtility.generateFailureResponse(error)).code(500);
    }
};
