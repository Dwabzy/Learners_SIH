import { getExam, getExams,createExam} from "./handlers";

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
    {
        method: 'POST',
        path: '/exams',
        handler: createExam
    },
];
