import { getQuestion, getQuestions, updateQuestion} from "./handlers";

export const questionRoutes = [
    {
        method: 'GET',
        path: '/questions/examq',
        handler: getQuestions
    },
    {
        method: 'GET',
        path: '/questions/{id}',
        handler: getQuestion
    },
    {
        method: 'PUT',
        path: '/qupd',
        handler: updateQuestion
    }
];
