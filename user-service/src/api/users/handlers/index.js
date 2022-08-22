import { User } from "../../../db/models/user.model";
import { ResponseUtility } from "../../../utils/response.utility";

export async function getUsers(request, h) {
    try {
        const {offset, limit} = request.query;
        const users = await User.findAll({offset, limit});
        return h.response(ResponseUtility.generateSuccessResponse({users}));
    } catch (error) {
        return h.response(ResponseUtility.generateFailureResponse(error)).code(500);
    }
}

export async function getUser(request, h) {
    try {

        const user_id=request.params.id;
        const user = await User.findOne({where: {id:user_id}});

        return h.response(ResponseUtility.generateSuccessResponse({user}));
    } catch (error) {
        return h.response(ResponseUtility.generateFailureResponse(error)).code(500);
    }
}
  
