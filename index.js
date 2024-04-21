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
    {
        learner_id: 145,
        assignment_id: 2,
        submission: {
            submitted_at: "2023-03-07",
            score: 140
        }
    }

];

function getLearnerData(course, ag, submissions) {
    // here, we would process this data to achieve the desired result.
    // Grab all unique learner ID's as objects and store them into an array
    function getLearnerId() {
        let newSubmissions = [];
        let arrOfObjects = []

        // loop over the our submissions
        submissions.forEach((element) => {

            // filter out only the learner_id key value pairs from each object
            newSubmissions = Object.keys(element).filter(key => key === 'learner_id').reduce((newObj, key) => {

                newObj[key] = element[key];
                // push each object into new array arrOfObjects for later use
                arrOfObjects.push(newObj);

                // filter out only unique learner_id objects
                let filteredArray = arrOfObjects.filter((element, index) => arrOfObjects
                    .findIndex(item => item.learner_id === element.learner_id) === index);

                return filteredArray;
            }, {})

            return newSubmissions;
        })
        // rename from learner_id to just id
        newSubmissions.map((element) => {
            element.id = element.learner_id;
            delete element.learner_id
        })
        return newSubmissions;
    }

    function getAssignmentId(arr1, arr2) {
        
        // We know if we .map element.assignment_id our array we will get all of the assignment id's, the question is how do we seperate them  based on student id?

        // This filters the array for only objects that have this learner id
        let testing = arr2.forEach((element1) => {
            console.log(arr1.filter((element2, i) => {
                if(element2.learner_id === element1.id) {
                    let key = element2.assignment_id;
                    element1[key] = 0;
                    

                }
                
                
                return element2.learner_id === element1.id
            })
        )
        console.log(element1)
        })
        


        return testing;
        
    }

    return getAssignmentId(submissions, getLearnerId());


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

console.log(result);