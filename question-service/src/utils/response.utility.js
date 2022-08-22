
export class ResponseUtility {
    static generateSuccessResponse(data) {
        let response = {
            isSuccess: true,
            data
        };
        return response;
    }

    static generateFailureResponse(error) {
        let response = {
            isSuccess: false,
            error
        };
        return response;
    }
}