// The provided course information.
const CourseInfo = {
    id: 451,
    name: "Introduction to JavaScript"
};

// The provided assignment group.
const AssignmentGroup = {
    id: 12345,
    name: "Fundamentals of JavaScript",
    course_id: 451,
    group_weight: 25,
    assignments: [
        {
            id: 1,
            name: "Declare a Variable",
            due_at: "2023-01-25",
            points_possible: 50
        },
        {
            id: 2,
            name: "Write a Function",
            due_at: "2023-02-27",
            points_possible: 150
        },
        {
            id: 3,
            name: "Code the World",
            due_at: "3156-11-15",
            points_possible: 500
        }
    ]
};

// The provided learner submission data.
const LearnerSubmissions = [
    {
        learner_id: 125,
        assignment_id: 1,
        submission: {
            submitted_at: "2023-01-25",
            score: 47
        }
    },
    {
        learner_id: 125,
        assignment_id: 2,
        submission: {
            submitted_at: "2023-02-12",
            score: 150
        }
    },
    {
        learner_id: 125,
        assignment_id: 3,
        submission: {
            submitted_at: "2023-01-25",
            score: 400
        }
    },
    {
        learner_id: 132,
        assignment_id: 1,
        submission: {
            submitted_at: "2023-01-24",
            score: 39
        }
    },
    {
        learner_id: 132,
        assignment_id: 2,
        submission: {
            submitted_at: "2023-03-07",
            score: 140
        }
    },
    // Test object to make sure program works with more than 2 learners
    // {
    //     learner_id: 145,
    //     assignment_id: 2,
    //     submission: {
    //         submitted_at: "2023-03-07",
    //         score: 140
    //     }
    // }

];

function getLearnerData(course, ag, submissions) {
    // here, we would process this data to achieve the desired result.
    try {
        console.log('Course ID:', course.id, "\nAssignment Group's Course ID:", ag.course_id);
        // Check if course ID matches to assignment group's course ID
        if (course.id !== ag.course_id) {
            throw new Error("ERROR: This AssignmentGroup does not belong to this course!");
        }
        function getLearnerId() {
            let uniqueLearnerIDs = [];
            let arrOfObjects = [];
    
            // loop over the submissions
            submissions.forEach((element) => {
    
                // filter out only the learner_id key value pairs from each object
                uniqueLearnerIDs = Object.keys(element).filter(key => key === 'learner_id').reduce((newObj, key) => {
    
                    newObj[key] = element[key];
                    // push each object into new array arrOfObjects for later use
                    arrOfObjects.push(newObj);
    
                    // filter out only unique learner_id objects
                    let filteredArray = arrOfObjects.filter((element, index) => arrOfObjects
                        .findIndex(item => item.learner_id === element.learner_id) === index);
    
                    return filteredArray;
                }, {})
    
                return uniqueLearnerIDs;
            })
            // Rename from learner_id to just id
            uniqueLearnerIDs.map((element) => {
                element.id = element.learner_id;
                delete element.learner_id
            })
            return uniqueLearnerIDs;
        }
    
        function getAssignmentId(arr1) {
    
            // Loop through our unique Learner IDs array
            arr1.forEach((element1) => {
    
                let totalScore = 0;
                let totalPointsPossible = 0;
                submissions.filter((element2) => {
    
                    if (element2.learner_id === element1.id) {
    
                        // Key, Score, & possible points variables
                        let key = element2.assignment_id;
                        let score = element2.submission.score;
                        let pointsPossible = ag.assignments[element2.assignment_id - 1].points_possible;
    
                        // What to do if points possible is zero
                        if (pointsPossible === 0) {
                            
                            score = 1;
                            pointsPossible = 1;
                            throw new Error("Points Possible is equal to zero!");
                        }
    
                        // date variables
                        let dueAtDate = Date.parse(ag.assignments[element2.assignment_id - 1].due_at);
                        let dateRightNow = Date.parse(Date(Date.now));
                        let submittedAt = Date.parse(element2.submission.submitted_at);
    
                        // if submitted at date is greater than the due date than deduct 10% points
                        if (submittedAt > dueAtDate) {
                            let deduction = pointsPossible * 0.1;
                            score = score - deduction;
    
                        }
                        // grade = score divided by pointsPossible
                        let grade = score / pointsPossible;
    
                        // create a key with assignment_id & a value of grade rounded to the nearest thousandth
                        element1[key] = Math.round(grade * 1000) / 1000;
    
                        // check if due at date is greater than today, if true then delete it.
                        if (dueAtDate > dateRightNow) {
                            score = 0;
                            pointsPossible = 0;
                            delete element1[key]
                        }
    
                        // Create a key of avg
                        element1['avg'] = 0;
    
                        // add all scores to total score
                        totalScore += score;
                        // add all points possible to total points possible
                        totalPointsPossible += pointsPossible;
                    }
    
                    return arr1;
                })
                // key of avg has a value of totalScore / totalPoints possible to get your overall class average
                element1.avg = totalScore / totalPointsPossible;
    
            })
    
            // Utilize at least one loop control keyword such as break or continue.
            for (i = 0; i < 2; i++) {
                if (i === 0) {
                    continue;
                } else {
                    break;
                }
            }
    
            return arr1;
    
        }
    
        const learnerIDs = getLearnerId();
        const assignmentIDs = getAssignmentId(learnerIDs);
    
        // My result
        console.log('My result: ', assignmentIDs);


    } catch (err) {
        console.error(err);
    }









    // Grab all unique learner ID's as objects and store them into an array
    

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

    return result;
}

const result = getLearnerData(CourseInfo, AssignmentGroup, LearnerSubmissions);

// Example Result
console.log('Example result: ', result);