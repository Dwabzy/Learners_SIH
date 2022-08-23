import { getExam, getExams} from "./handlers";

export const examRoutes = [
    {
        method: 'GET',
        path: '/exams',
        handler: getExams
    },
    {
        method: 'GET',
        path: '/exams/{id}',
        handler: getExam
    },
];
