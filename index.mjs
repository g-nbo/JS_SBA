import { CourseInfo, AssignmentGroup, LearnerSubmissions } from './db.mjs';
import { getLearnerData } from './getLearnerData.mjs';


const myResult = getLearnerData(CourseInfo, AssignmentGroup, LearnerSubmissions);

const result = [
    {
        id: 125,
        avg: 0.985, // (47 + 150) / (50 + 150)
        1: 0.94, // 47 / 50
        2: 1.0 // 150 / 150
    },
    {
        id: 132,
        avg: 0.82, // (39 + 125) / (50 + 150)
        1: 0.78, // 39 / 50
        2: 0.833 // late: (140 - 15) / 150
    }
];

// My Result
console.log('My result: ', myResult);

// Example Result
console.log('Example result: ', result);