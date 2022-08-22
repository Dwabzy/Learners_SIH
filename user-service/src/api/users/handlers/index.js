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

export async function updateUser(request, h) {
    try {
        const user = await User.update(
            {
                first_name:"Kamali",
            },
            {
                where:{first_name:"Rekha"}
            }
        );
        console.log(user);
    } catch (error) {
        return h.response(ResponseUtility.generateFailureResponse(error)).code(500);
    }
}

export async function createUser(req, h){
    try {
        const user = await User.create({ id:"204", first_name: "Joe",last_name: "Doe", email: "test@gmail.com", mobile: "9552485000",password:"abcd",user_role_id:"2",gender:"M",dob:"12-04-2001",state:"Tn",organization_id:"123456" });
    console.log(user.email);
    } catch(error) {
        return h.response(ResponseUtility.generateFailureResponse(error)).code(500);
    }
};


  
